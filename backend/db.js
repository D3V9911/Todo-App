const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Devvv:secret@cluster0.oavsr.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo: todo
}
