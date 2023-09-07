import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Item({ text, index }) {
  return (
    <Draggable key={text} draggableId={text} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </div>
      )}
    </Draggable>
  );
}
