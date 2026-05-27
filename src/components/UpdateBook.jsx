function UpdateBook({
  item,
  setEditBook,
}) {

  return (
    <button  className="edit-btn"
      onClick={() =>
        setEditBook(item)
      }
    >
      Edit
    </button>
  );
}

export default UpdateBook;