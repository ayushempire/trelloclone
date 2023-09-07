import React from "react";
import Column from "./Column";

export default function Board() {
  // column array basic
  const todos = ["item1", "item2", "item3"];

  return (
    <div
      className="d-flex flex-column m-5 justify-content-between"
      style={{ minWidth: "128px" }}
    >
      <div>
        {todos.map((column, index) => (
          <Column key={column} column={column} index={index} />
        ))}
      </div>
    </div>
  );
}
