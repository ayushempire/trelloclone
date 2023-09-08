import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Edit } from "react-feather";

export default function Item({ text, index, colid, deleteItem }) {
  const deleteitem = () => {
    deleteItem(text, colid);
  };

  return (
    <Draggable key={text.id} draggableId={`${text.id}`} index={index}>
      {(provided) => (
        <div
          style={{ minWidth: "min-content" }}
          className="  mt-2 p-1 bg-light border border-2 norder-dark  "
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
          <div className="d-flex align-items-end">
            <p className="me-auto">{text.desc}</p>
            <button className="btn">
              <Edit style={{ height: "18px", width: "18px" }} />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
