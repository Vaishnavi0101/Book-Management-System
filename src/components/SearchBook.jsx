function SearchBook({
  search,
  setSearch,
}) {

  return (
    <div>

      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

    </div>
  );
}

export default SearchBook;