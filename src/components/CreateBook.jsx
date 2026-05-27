import { useEffect, useState } from "react";

function CreateBook({
  createBook,
  editBook,
  updateBook,
}) {

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {

    if (editBook) {
      setBook(editBook);
    }

  }, [editBook]);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editBook) {

      updateBook(book);

    } else {

      createBook(book);

    }

    setBook({
      title: "",
      author: "",
      genre: "",
      year: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
      }}
    >

      <input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) =>
          setBook({
            ...book,
            title: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) =>
          setBook({
            ...book,
            author: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Genre"
        value={book.genre}
        onChange={(e) =>
          setBook({
            ...book,
            genre: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Year"
        value={book.year}
        onChange={(e) =>
          setBook({
            ...book,
            year: e.target.value,
          })
        }
      />

      <br />
      <br />

     <button className="add-btn">
        {editBook
          ? "Update Book"
          : "Add Book"}
      </button>

    </form>
  );
}

export default CreateBook;