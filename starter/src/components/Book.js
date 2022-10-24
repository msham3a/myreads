import BookShelfChanger from "./BookShelfChanger";

function Book({ books , refresh }) {
  return books.map((book) => (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${typeof book.imageLinks !== "undefined"? book.imageLinks.thumbnail : ''}")`,
            }}
          ></div>
          <BookShelfChanger book={book} refresh={refresh}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{typeof book.authors !== "undefined"? book.authors[0]: ''}</div>
        <div className="book-shelf">{['currentlyReading','wantToRead','read'].includes(book.shelf)?book.shelf: '' }</div>
      </div>
    </li>
  ));
}

export default Book;
