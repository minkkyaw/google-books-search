import React, { useState } from "react";
import API from "../../utils/API";
import BookDetails from './../../components/BookDetails/book-details.component';

const SavedBooks = () =>{
  const [books, setBooks] = useState([]);

  const loadBooks = () => {
    return API.getBooks()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };
  loadBooks();

  const deleteBook = id => {
    API.deleteBook(id)
      .then(() => loadBooks().then(() => alert('Successfully Deleted')))
      .catch(err => console.log(err));
  };
  const handleDeleteBook = event => {
    const id = event.target.dataset.data;
    deleteBook(id);
  }
  return (
    <div>
      <h1 className="result-title">Saved Books</h1>
      <div className="result-container">
        {books.length ? (
          <div>
            {books.map(book =>(
                <BookDetails key={book._id} book={book} handleFunction={handleDeleteBook} action="delete"/>
              )
            )}
          </div>
        ) : (
          <h3 style={{"textAlign": "center"}}>No Saved Books to Display</h3>
        )}
      </div>
    </div>
      )
}

export default SavedBooks;
