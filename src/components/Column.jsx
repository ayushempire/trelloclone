import React from "react";
import Item from "./Item";

export default function Column(props) {
  return (
    <div className="d-flex flex-column">
      {props.list.map((text, index) => (
        <Item key={text} text={text} index={index} />
      ))}
    </div>
  );
}
