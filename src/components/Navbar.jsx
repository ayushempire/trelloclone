import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            To Do App
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Start
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  about
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
