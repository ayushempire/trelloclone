import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Item({ text, index }) {
  return (
    <Draggable key={text.id} draggableId={`${text.id}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3>{text.title}</h3>
          <h5>{text.desc}</h5>
        </div>
      )}
    </Draggable>
  );
}
