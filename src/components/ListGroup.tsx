import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}
//Adding Fragments
function ListGroup({ items, heading }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
