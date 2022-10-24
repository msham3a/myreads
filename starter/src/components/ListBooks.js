import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

function ListBooks({ bookShelfTitles , books }) {
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookShelfTitles.map((title) => (
            <BookShelf
              key={title.id}
              bookShelfTitle={title.name}
              books={books}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link
          to="/search"
        >
          Add a book
        </Link>
      </div>
    </div>
  );
}

export default ListBooks;
