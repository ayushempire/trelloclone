import React from "react";
import Column from "./Column";

export default function Board() {
  // column array basic
  const todos = ["item1", "item2", "item3"];

  return (
    <div
      style={{
        minWidth: "128px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        margin: "auto",
        width: "80%",
        gap: "8px",
      }}
    >
      <div>
        <Column list={todos} />

        {/* {todos.map((text, index) => (
          <Item key={text} column={text} index={index} />
        ))} */}
      </div>
    </div>
  );
}
