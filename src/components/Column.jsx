import React, { useState } from "react";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";

export default function Column({
  col: { list, id },
  deleteItem,
  addItem,
  editItem,
}) {
  // usestate to store new itemsa/tasks/todos
  const [newitem, setnewitem] = useState({
    title: "",
    desc: "",
  });

  // use state for add new item
  const [flag, setflag] = useState(false);

  // fuction to add new item
  const additem = (e) => {
    if (newitem.title === "" || newitem.desc === "") {
      alert("please enter title or description");
    } else {
      addItem(id, newitem);
      setflag(false);
    }
  };

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
                  editItem={editItem}
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
        <div className="d-flex flex-column gap-1 ">
          <input
            style={{ border: ".2rem solid grey", outline: "none" }}
            className="rounded p-2 border-success text-dark "
            type="text"
            autoFocus
            placeholder="title"
            value={setnewitem.title}
            onChange={(e) => setnewitem({ ...newitem, title: e.target.value })}
          />
          <textarea
            style={{ border: ".2rem solid grey", outline: "none" }}
            className="rounded p-2 border-success text-dark  "
            type="text"
            placeholder="desc"
            value={setnewitem.desc}
            onChange={(e) => setnewitem({ ...newitem, desc: e.target.value })}
          />
          <div className="d-flex justify-content-around">
            <button
              className="btn border-success btn-success"
              type="button"
              onClick={additem}
            >
              add
            </button>
            <button
              className="btn border-danger btn-danger"
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
