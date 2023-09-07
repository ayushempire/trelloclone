import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Item({ text, index, colid, deleteItem }) {
  const deleteitem = () => {
    deleteItem(text, colid);
  };

  return (
    <Draggable key={text.id} draggableId={`${text.id}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="d-flex align-items-center">
            <h3 className="me-auto">{text.title}</h3>
            <button className="btn " onClick={deleteitem}>
              X
            </button>
          </div>
          <h5>{text.desc}</h5>
        </div>
      )}
    </Draggable>
  );
}
