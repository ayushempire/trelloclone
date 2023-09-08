import React from "react";
import "./HomPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
  const [signup, setsignup] = useState({
    email: "",
    password: "",
  });

  // page navigator
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log();
    if (signup.email === "" || signup.password === "") {
      alert("fill the credentials");
    } else {
      alert("signup succesfull");
      navigate("/Board");
    }
    // // else {
    // //   localStorage.setItem("user", JSON.stringify(signup));
    // // }
    // // fucntion to export data on mongodb
    // try {
    //   const responce = await fetch("http://localhost:5000/api/createuser", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: signup.email,
    //       password: signup.password,
    //     }),
    //   });
    //   const json = await responce.json();
    //   console.log(json);
    //   if (!json.success) {
    //     alert("enter valid credentials");
    //   }
    //   if (json.success) {
    //     alert("signup successful");
    //     navigate("/kanBoard");
    //   }
    // } catch {
    //   alert("user saved localy");
    //   localStorage.setItem("user", JSON.stringify(signup));
    //   navigate("/KanBoard");
    // }
  };

  return (
    <div
      className=" homePage d-flex flex-column flex-md-column flex-lg-row"
      style={{ minHeight: "100vh" }}
    >
      <div
        className=" container text-white pt-5 me-5 ps-lg-5"
        style={{ zIndex: 2 }}
      >
        <h1 className="ms-lg-4 text-primary" style={{ fontSize: "45px" }}>
          KMS makes it easier for peoples to manage projects and tasks
        </h1>
        <p className="pt-4 fs-3 ms-lg-4 text-success">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who’s doing what and what needs to get
          done
        </p>
        <h5 className="pt-4 ms-lg-4">WHAT YOU GET ON THE FREE PLAN:</h5>
        <ul className="fs-5 mt-3 ms-lg-5 ">
          <li>Unlimited cards</li>
          <li>Unlimited Power-Ups per board</li>
        </ul>
      </div>
      <div className="container pt-5  ms-lg-5 mb-5 mb-lg-0">
        <div>
          <h1>
            Sign up now <br />
            it's free
          </h1>
        </div>

        <form
          className="d-flex flex-column flex-md-column flex-lg-column rd"
          onSubmit={handleSignup}
        >
          <input
            className="mt-2 border-3 border-warning mb-3 ps-3 w-75 form-control"
            type="email"
            placeholder="enter your email address"
            name="email"
            value={setsignup.email}
            onChange={(e) => {
              setsignup({ ...signup, email: e.target.value });
            }}
          />
          <input
            className="mt-1 mb-3 ps-3 w-75 form-control border-3 border-warning"
            type="password"
            placeholder="enter password"
            aria-describedby="passwordHelpInline"
            name="password"
            value={setsignup.password}
            onChange={(e) => {
              setsignup({ ...signup, password: e.target.value });
            }}
          />
          <button
            className="btn btn-outline-success border-3 w-75 form-control"
            type="submit"
            // onSubmit={handleSignup}
          >
            sign up
          </button>
        </form>
      </div>
    </div>
  );
}
