const mongoose = require('mongoose')
const listSchema = new mongoose.Schema(
    {
        todoTitle: {
            type: String,
            required: true,
        },
        todoDesc: {
            type: String,
            required: true,
        }
    }
)

const List = mongoose.model('todo', listSchema)
module.exports = List