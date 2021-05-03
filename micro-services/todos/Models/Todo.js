const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String, required: true},
  isCompleted: { type: Boolean, required: true},
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;