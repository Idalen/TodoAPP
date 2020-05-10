const restful = require('node-restful')
const mongoose = restful.mongoose

const task = new mongoose.Schema({
    name: { type: String, required: true },
    done: { type: Boolean, required: true, default: false},
    priority: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now }
})

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    color: { type: String, required: true, default: '#fff' },
    createdAt: { type: Date, default: Date.now },
    list: [task]
})

module.exports = restful.model('Todo', todoSchema)