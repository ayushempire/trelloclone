import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex">
          <a className="navbar-brand me-auto" href="#">
            <img src="kmslogo.svg" width="180" height="45" />
          </a>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse me-2 ms-2"
          id="navbarSupportedContent"
        >
          <button
            className="btn btn-warning active text-dark fw-bold mt-1"
            aria-current="page"
            href="#"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
