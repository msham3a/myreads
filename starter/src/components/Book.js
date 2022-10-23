import BookShelfChanger from "./BookShelfChanger";

function Book({ books }) {
  return books.map((book) => (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`,
            }}
          ></div>
          <BookShelfChanger book={book}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors[0]}</div>
      </div>
    </li>
  ));
}

export default Book;
