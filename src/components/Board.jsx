import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import Item from "./Item";

export default function Board() {
  // for multiple columns made an usestate
  const initialColumns = {
    todo: {
      id: "todo",
      list: [
        { id: 1, title: "item 1", desc: "hello world" },
        { id: 2, title: "item 2", desc: "hello world" },
        { id: 3, title: "item 3", desc: "hello wrold" },
        { id: 4, title: "item 4", desc: "hello wrold" },
      ],
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

  //   todo: ondrag end function
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

      //   create new copy of object
      const newCol = {
        id: start.id,
        list: newtodos,
      };
      // console.log(newCol);

      //   // update the state
      settodos((state) => ({ ...state, [newCol.id]: newCol }));
    } else {
      // filter the start list like before
      const newStartList = [...start.list];
      newStartList.splice(source.index, 1);

      // if start is differ from end , we need to upddate multiple columns
      // create new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // make a new end list array
      const newEndList = [...end.list];

      // insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // create a  new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // update the state
      settodos((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
    }
  };

  // todo : deleteItem function

  const deleteItem = (item, id) => {
    let uplists;

    let newtodo = Object.values(todos);
    // console.log(newtodo);

    let newlist;
    newlist = newtodo.filter((e) => {
      return e.id === id;
    });

    Object.values(newlist).filter((e) => {
      const lists = e.list;

      uplists = lists.filter((e) => {
        return e !== item;
      });
      // console.log(uplists);
    });

    const newEndCol = {
      id: id,
      list: uplists,
    };

    settodos((state) => ({
      ...state,
      [newEndCol.id]: newEndCol,
    }));
  };

  // todo : add new item function
  const addItem = (cid, todo) => {
    let lists;
    // let uplists;

    // if (todos[cid].list.length === 0) {
    //   itemid = 1;
    // } else {
    //   itemid = todos[cid].list.length + 1;
    // }
    // todo id setup

    const data = {
      id: Date.now() + Math.random(),
      title: todo.title,
      desc: todo.desc,
    };
    // todo end of id setup

    let newtodo = Object.values(todos);
    // console.log(newtodo);

    let newlist;
    newlist = newtodo.filter((e) => {
      return e.id === cid;
    });

    Object.values(newlist).filter((e) => {
      lists = e.list;

      lists.push(data);
      // console.log(lists);
    });

    const newEndCol = {
      id: cid,
      list: lists,
    };
    settodos((state) => ({
      ...state,
      [newEndCol.id]: newEndCol,
    }));
    // console.log(todos);
  };

  // todo : edit item functio
  const editItem = (id, item) => {
    console.log(item.id);
    let uplists;

    const data = {
      id: item.id,
      title: item.title,
      desc: item.desc,
    };

    let newtodo = Object.values(todos);
    // console.log(newtodo);

    let newlist;
    newlist = newtodo.filter((e) => {
      return e.id === id;
    });

    Object.values(newlist).filter((e) => {
      const lists = e.list;

      uplists = lists.filter((e) => {
        return e.id !== item.id;
      });

      uplists.push(data);
    });

    const newEndCol = {
      id: id,
      list: uplists,
    };

    settodos((state) => ({
      ...state,
      [newEndCol.id]: newEndCol,
    }));
  };
  // console.log(todos);

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
          <Column
            col={col}
            key={col.id}
            deleteItem={deleteItem}
            addItem={addItem}
            editItem={editItem}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
