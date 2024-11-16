const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    is_complete: {
        type: Boolean
    },
    due_date: {
        type: Date
    }
});

// Xuất mô hình Todo
module.exports = mongoose.model('Todo', todoSchema);
