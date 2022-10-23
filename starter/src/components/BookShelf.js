import Book from "./Book";

function BookShelf({ bookShelfTitle, books }){

    let bookShelfFilter='';

    switch (bookShelfTitle) {
        case 'Currently Reading':
            bookShelfFilter = "currentlyReading";
          break;
        case 'Want to Read':
            bookShelfFilter = "wantToRead";
          break;
        case 'Read':
            bookShelfFilter = "read";
          break;
        default:
            bookShelfFilter = "NONE";
      }

    return <div className="bookshelf">
    <h2 className="bookshelf-title">{bookShelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book
          books={books.filter((book) => book.shelf === bookShelfFilter)}
        />
      </ol>
    </div>
    </div>
    ;

}

export default BookShelf;