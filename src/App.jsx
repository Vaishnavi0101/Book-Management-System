import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import CreateBook from './components/CreateBook';
import DeleteBook from './components/DeleteBook';
import SearchBook from './components/SearchBook';
import UpdateBook from './components/UpdateBook';
function App() {
  
   const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const [editBook, setEditBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url =
    "https://6a1567a091ff9a63de081488.mockapi.io/books";

  // GET
  const getBooks = async () => {

    try {

      setLoading(true);

      const res = await axios.get(url);

      setBooks(res.data);

    } catch (err) {

      setError("Error fetching books");

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  // CREATE
  const createBook = async (book) => {

    try {

      await axios.post(url, book);

      getBooks();

    } catch (err) {

      setError("Book not added");

    }
  };

  // DELETE
  const deleteBook = async (id) => {

    try {

      await axios.delete(`${url}/${id}`);

      getBooks();

    } catch (err) {

      setError("Delete failed");

    }
  };

  // UPDATE
  const updateBook = async (book) => {

    try {

      await axios.put(
        `${url}/${book.id}`,
        book
      );

      setEditBook(null);

      getBooks();

    } catch (err) {

      setError("Update failed");

    }
  };

  const filteredBooks = books.filter((item) => {

  return (
    item.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    item.author
      .toLowerCase()
      .includes(search.toLowerCase())
  );

});

  return (
    <div className="container">

     <h1 className="heading">
  Book Management System
</h1>

      <SearchBook
        search={search}
        setSearch={setSearch}
       
      />

      <CreateBook
        createBook={createBook}
        editBook={editBook}
        updateBook={updateBook}
      />

     {loading && (
  <p className="loading">
    Loading...
  </p>
)}

      {error && (
       <p className="error">
          {error}
        </p>
      )}

     <div className="book-container">

        {filteredBooks.map((item) => (

          <div
  key={item.id}
  className="book-card"
>

            <h3>{item.title}</h3>

            <p>
              Author: {item.author}
            </p>

            <p>
              Genre: {item.genre}
            </p>

            <p>
              Year: {item.year}
            </p>

            <div className="btn-group">

              <UpdateBook
                item={item}
                setEditBook={setEditBook}
              />

              <DeleteBook
                id={item.id}
                deleteBook={deleteBook}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App
