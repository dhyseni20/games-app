import { useState } from "react";
//Adding Fragments
function ListGroup() {
  const items = ["New York", "London", "San Francisco", "Paris", "Tokyo"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {/* {message} */}
      {/* if the condition is true the element is shown */}
      {items.length === 0 && <p>No tiems found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
