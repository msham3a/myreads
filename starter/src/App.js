import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";

function App() {
  //books state
  const [books, SetBooks] = useState([]);

  //useEffect to get all books
  //get the books from API then set it in callback function
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      //console.log(res);
      SetBooks(res);
    };

    getBooks();
  }, [books]);

  const bookShelfTitles = [
    { id: 1, name: "Currently Reading" },
    { id: 2, name: "Want to Read" },
    { id: 3, name: "Read" },
  ];

  return (
    <Routes>
    <Route exact path="/" element={
      <ListBooks bookShelfTitles={bookShelfTitles} books={books} SetBooks={SetBooks}/>
    }/>
    <Route exact path="/search" element={
      <SearchBooks />
    }/>
  </Routes>
  );
}

export default App;
