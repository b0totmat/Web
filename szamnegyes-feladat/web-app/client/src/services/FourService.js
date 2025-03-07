import Api from "./Api.js"

const api = Api()

export default {
    index() {
        return api.get('/')
    },
    show() {
        return api.get('/:id')
    },
    insert(four) {
        return api.post('/', four)
    }
}
