import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

export default function Board() {
  // for multiple columns made an usestate
  const initialColumns = {
    todo: {
      id: "todo",
      list: ["item 1", "item 2", "item 3"],
    },
    doing: {
      id: "doing",
      list: [],
    },
    done: {
      id: "done",
      list: [],
    },
  };

  // column array basic
  const [todos, settodos] = useState(initialColumns);

  //   /ondrag end function
  const onDragEnd = ({ source, destination }) => {
    // valid destination
    if (destination === undefined || destination === null) {
      console.log("wrong in destination");
      return null;
    }

    //    { // move item in list or column
    //     // let newtodos = [...todos]; // made instance of todo array
    //     // newtodos.splice(source.index, 1); // made a new array without source
    //     // newtodos.splice(destination.index, 0, todos[source.index]); // spilce that with destination and source
    //     // settodos(...newtodos); // setting that newarray to main todos
    //    }
    //  ? If the source and destination columns are the same
    // ? AND if the index is the same, the item isn't moving
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return null;
    }

    // todo:  set start and end variables
    const start = todos[source.droppableId];
    const end = todos[destination.droppableId];

    // ? if start is the same as end then we are in the same column
    if (start === end) {
      // todo: move item within list
      let newtodos = [...start.list]; // made instance of todo array

      newtodos.splice(source.index, 1); // made a new array without source

      newtodos.splice(destination.index, 0, start.list[source.index]); // spilce that with destination and source

      //   console.log(newtodos);
      //   create new copy of object
      const newCol = {
        id: start.id,
        list: newtodos,
      };
      console.log(newCol);

      //   // update the state
      settodos((state) => ({ ...state, [newCol.id]: newCol }));
    }
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
        {Object.values(todos).map((col) => (
          <Column col={col} key={col.id} />
        ))}
      </div>
    </DragDropContext>
  );
}
