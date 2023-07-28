//Adding Fragments
function ListGroup() {
  const items = ["New York", "London", "San Francisco", "Paris", "Tokyo"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
