const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    isDone: Boolean,
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);