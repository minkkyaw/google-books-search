import axios from "axios";

export default {
  // Gets all books
  getBooks: function(query) {
    let url = `/api/books`;
    if (query)
      url = url + `?${Object.keys(query)[0]}=${query[Object.keys(query)[0]]}`;
    return axios.get(url);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  searchBook: function(name) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}`);
  }
};
