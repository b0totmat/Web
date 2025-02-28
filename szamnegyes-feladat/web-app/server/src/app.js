import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import fs from 'fs'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    fs.rea
})

app.post('/', (req, res) => {
    console.log(req.body)
    fs.readFile('./src/fours.json', (err, data) => {
        if(err) {
            res.status(400)
        } else {
            const fours = JSON.parse(data)
            const newFour = req.body

            fours.push(newFour)

            fs.writeFile('./src/fours.json', JSON.stringify(fours), (error) => {
                if(error) {
                    res.status(400)
                }
                res.status(200)
            })
        }
    })
})

app.listen(3000)
