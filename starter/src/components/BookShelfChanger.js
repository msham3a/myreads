function BookShelfChanger({ book }){

  const options=[{ id: 1, name: "Currently Reading" ,value:"currentlyReading"},
  { id: 2, name: "Want to Read" ,value:"wantToRead"},
  { id: 3, name: "Read" ,value:"read"},
  { id: 4, name: "None" ,value:"none"},]
  
  const optionsList=options.filter((op)=> book.shelf!==op.value).map((op)=> (
    <option key={op.id} value={op.value}>{op.name}</option>
    ));

    return <div className="book-shelf-changer">
    <select>
      <option value="none" disabled>
        Move to...
      </option>
      {optionsList}
    </select>
  </div>;
}

export default BookShelfChanger;