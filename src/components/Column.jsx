import React, { useState } from "react";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ col: { list, id }, deleteItem }) {
  // use state for add new item
  const [flag, setflag] = useState(false);

  return (
    <div>
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
                <Item
                  key={text.id}
                  text={text}
                  index={index}
                  colid={id}
                  deleteItem={deleteItem}
                />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      {!flag ? (
        <div className="d-flex justify-content-center">
          <button
            className="btn  border-success w-100"
            type="button"
            onClick={(e) => setflag(true)}
          >
            Add new Task
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column gap-1">
          <input className="rounded " type="text" placeholder="title" />
          <textarea type="text" placeholder="desc" />
          <div className="d-flex justify-content-around">
            <button className="btn border-success" type="button">
              add
            </button>
            <button
              className="btn border-danger"
              type="button"
              onClick={(e) => setflag(false)}
            >
              cancle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
