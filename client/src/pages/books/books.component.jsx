import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Label, Input, FormBtn } from "../../components/Form/form.component";
import BookDetails from "../../components/BookDetails/book-details.component";

import './books.styles.scss';

const Books = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (search) API.searchBook(search).then(res => setBooks(res.data.items));
  }, [search]);

  const handleFormSubmit = event => {
    event.preventDefault();
    event.target.blur();
    const searchInputELement = document.querySelector(".search-input");
    setSearch(searchInputELement.value);
    searchInputELement.value = "";
  };

  const handleBookSaved = async event => {
    const bookSaved = JSON.parse(event.target.dataset.data);
    const savedBookInDB = await API.getBooks({id:bookSaved.id}) 
    if(savedBookInDB.data.length !== 0) return alert('This book has been already saved!');
    API.saveBook(bookSaved).then(res => alert('Successfully Saved')).catch((err) => console.log(err))
  };

  return (
    <div>
      <form className="book-search-from">
        <Label className="search-input-label" />
        <Input
          className="search-input inherit"
          name="search"
          placeholder="Search"
        />
        <FormBtn className="btn inherit" type="submit" value="Search" onClick={handleFormSubmit} />
      </form>
      <h1 className="result-title">Results</h1>
      <div className="result-container">
        {books.length ? (
          <div>
            {books.map(book =>{
              const {id, volumeInfo: {title, authors, description, imageLinks: {thumbnail}, infoLink}} = book;
              const savedBook= {id, title, authors, description, thumbnail, infoLink};
              return (
                <BookDetails key={book.id} book={savedBook} handleFunction={handleBookSaved} action="save" />
              )}
            )}
          </div>
        ) : (
          <h3 style={{"textAlign": "center"}}>No Results to Display</h3>
        )}
      </div>
    </div>
  );
};

export default Books;
