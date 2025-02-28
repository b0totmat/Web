import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import fs from 'fs'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body)
    fs.readFile('./src/fours.json', (err, data) => {
        if(err) {
            res.status(400)
        } else {
            const fours = JSON.parse(data)
            const newFour = {
                id: Number(fours[fours.length - 1].id + 1),
                four: req.body.four
            }
            
            const matchingFour = fours.find(f => f.four == newFour.four)
            if(!matchingFour) {
                if(newFour.four.length != 4)
                    res.status(400).send({ message: 'Invalid data.' })
                else {
                    fours.push(newFour)

                    fs.writeFile('./src/fours.json', JSON.stringify(fours), (error) => {
                        if(error) {
                            return res.status(400)
                        }
                        res.status(200)
                    })
                }
            } else {
                res.status(409)
            }
        }
    })
})

app.listen(3000)
