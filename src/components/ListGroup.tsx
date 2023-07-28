import { MouseEvent } from "react";
//Adding Fragments
function ListGroup() {
  const items = ["New York", "London", "San Francisco", "Paris", "Tokyo"];

  //items = [];

  //   const message = items.length === 0 ? <p> No items found</p> : null;

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {message} */}
      {/* if the condition is true the element is shown */}
      {items.length === 0 && <p>No tiems found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
