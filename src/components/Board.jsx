import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

export default function Board() {
  // column array basic
  const [todos, settodos] = useState(["item 1", "item 2", "item 3"]);

  //   /ondrag end function
  const onDragEnd = ({ source, destination }) => {
    // valid destination
    if (destination === undefined || destination === null) return;

    // make sure we moving item
    if (destination.index === source.index) return;

    // move item in list or column
    let newtodos = [...todos]; // made instance of todo array
    newtodos.splice(source.index, 1); // made a new array without source

    newtodos.splice(destination.index, 0, todos[source.index]); // spilce that with destination and source

    settodos(newtodos); // setting that newarray to main todos
  };

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
