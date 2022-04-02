const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    description: {
        type: String,
        required: true
    },  
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const task = mongoose.model('task', TaskSchema);
module.exports = task;