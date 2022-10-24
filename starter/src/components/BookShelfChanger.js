import * as BooksAPI from "../BooksAPI";

function BookShelfChanger({ book }){

  const options=[{ id: 1, name: "Currently Reading" ,value:"currentlyReading"},
  { id: 2, name: "Want to Read" ,value:"wantToRead"},
  { id: 3, name: "Read" ,value:"read"},
  { id: 4, name: "None" ,value:"none"},]
  
  const optionsList=options.filter((op)=> (book.shelf!==op.value && book.shelf!=='')).map((op)=> (
    <option key={op.id} value={op.value}>{op.name}</option>
    ));

    return <div className="book-shelf-changer">
    <select
    onChange={
    (e) =>
      {
        BooksAPI.update(book,e.target.value);
        book.shelf=e.target.value;
      }
    }
    >
      <option value={book.shelf}>
        Move to...
      </option>
      {optionsList}
    </select>
  </div>;
}

export default BookShelfChanger;