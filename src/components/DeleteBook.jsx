function DeleteBook({
  id,
  deleteBook,
}) {

  return (
    <button
      className="delete-btn"
      onClick={() =>
        deleteBook(id)
      }
    >
      Delete
    </button>
  );
}

export default DeleteBook;