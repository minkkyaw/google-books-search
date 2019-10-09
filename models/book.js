const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [String],
  description: String,
  thumbnail: String,
  infoLink: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
