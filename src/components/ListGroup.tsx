//Adding Fragments
function ListGroup() {
  let items = ["New York", "London", "San Francisco", "Paris", "Tokyo"];

  //items = [];

  //   const message = items.length === 0 ? <p> No items found</p> : null;

  return (
    <>
      <h1>List</h1>
      {/* {message} */}
      {/* if the condition is true the element is shown */}
      {items.length === 0 && <p>No tiems found</p>}
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
