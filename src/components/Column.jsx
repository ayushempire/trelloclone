import React from "react";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ col: { list, id } }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div className="d-flex flex-column mt-2 bg-light border-dark">
          <h2 className="text-center text-white bg-dark pb-2">{id}</h2>

          <div
            className="d-flex flex-column p-2"
            style={{ minHeight: "fit-content" }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list.map((text, index) => (
              <Item key={text.id} text={text} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
