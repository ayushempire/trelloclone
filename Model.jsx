import React, { useState } from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "white",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  height: "90%",
  width: "90%",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Model({ item: { id, title, desc }, onClose }) {
  // usestate htmlFor edit task
  const [edittask, setedittask] = useState({
    id: id,
    title: title,
    desc: desc,
  });

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button
          className="btn bg-danger fs-4"
          style={{ marginLeft: "90%", marginTop: "-35px" }}
          onClick={onClose}
        >
          {" "}
          X{" "}
        </button>
        <div className="container">
          <h1 className="text-center">Edit task</h1>

          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={(setedittask.title, edittask.title)}
                onChange={(e) =>
                  setedittask({ ...edittask, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                description
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={(setedittask.desc, edittask.desc)}
                onChange={(e) =>
                  setedittask({ ...edittask, desc: e.target.value })
                }
              />
            </div>

            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                console.log(edittask);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("edit-root")
  );
}
