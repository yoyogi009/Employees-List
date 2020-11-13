import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//to show the employees list
function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key} title="Click to edit">
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span title="Delete">
            <FontAwesomeIcon
              onClick={() => {
                props.deleteItem(item.key);
              }}
              icon="trash"
            />
          </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
