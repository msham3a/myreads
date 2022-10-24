import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import { useState, useEffect } from "react";

function SearchBooks() {
  //sbooks state
  const [sbooks, SetSBooks] = useState([]);
  const [searchQuery, setQuery] = useState("");

  const updateQuery = (searchQuery) => {
    SetSBooks([]);
    setQuery(searchQuery);
  };

  // const clearQuery = () => {
  //   updateQuery("");
  // };

  useEffect(() => {
    const getSBooks = async () => {
      const searchBooks = await BooksAPI.search(searchQuery);
      //console.log(searchBooks);

      const myShelvesBooks = await BooksAPI.getAll();
      const myShelvesBooksIds = myShelvesBooks.map(
        (myShelvesBook) => myShelvesBook.id
      );
      //console.log(myShelvesBooksIds);

      if (
        typeof searchBooks !== "undefined" &&
        searchBooks.error !== "empty query"
      ) {

        searchBooks.forEach((searchBook) => {
          if (myShelvesBooksIds.includes(searchBook.id)) {
            searchBook.shelf = myShelvesBooks.filter(
              (b) => b.id === searchBook.id
            )[0].shelf;
          } else {
            searchBook.shelf = "none";
          }
        });

        SetSBooks(searchBooks);
      }
    };

    getSBooks();
  }, [searchQuery]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN"  value={searchQuery}
          onChange={(event) => 
          updateQuery(event.target.value)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <Book books={sbooks} />
        </ol>
      </div>
    </div>
  );
}

export default SearchBooks;
