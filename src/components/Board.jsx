import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

export default function Board() {
  // column array basic
  const [todos, settodos] = useState(["item1", "item2", "item3"]);

  // ondrag end function
  const onDragEnd = () => null;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
        <Column list={todos} />
      </div>
    </DragDropContext>
  );
}
