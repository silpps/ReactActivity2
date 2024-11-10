// src/BookList.jsx
import { books } from "./books.js";
import Book from "./Books.jsx";

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} book={book}/>;
        })}
      </section>
    </>
  );
}

export default BookList;