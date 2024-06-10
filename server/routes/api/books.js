const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  favoritedBy: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  ]
});

module.exports = mongoose.model('Book', bookSchema);