import React from "react";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ list }) {
  return (
    <Droppable droppableId="col-1">
      {(provided) => (
        <div
          className="d-flex flex-column"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {list.map((text, index) => (
            <Item key={text} text={text} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
