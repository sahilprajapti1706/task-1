import React, { useContext, useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { FaSearch } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-light py-3 px-4 sticky-top top-0 d-none d-lg-flex px-5">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">
            <img
              src="./logo.png"
              alt="Logo"
              height="24"
              className="d-inline-block align-top"
            />
          </a>
          <div
            className="px-4 py-1 rounded-pill "
            style={{ backgroundColor: "#EDEEF0", width: "380px" }}
          >
            <form className="d-flex justify-content-center align-items-center ">
              <FaSearch
                style={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: "#EDEEF0",
                }}
              />
              <input
                className="form-control "
                type="search"
                placeholder="Search for your favorite groups in ATG"
                style={{
                  backgroundColor: "#EDEEF0",
                  outline: "none",
                  border: "none",
                }}
                aria-label="Search"
              />
            </form>
          </div>
          {isLoggedIn ? (
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <img src="./user.png" alt="" />
              <span className="fw-semibold">{"Siddharth Goyal"}</span>
              <FaCaretDown />
            </div>
          ) : (
            <div className="d-flex fw-semibold">
              Create Account &nbsp;
              <a
                className="nav-link text-primary"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
              >
                It's Free
              </a>
            </div>
          )}
        </div>
      </nav>
      <SignUp />
      <SignIn />

      <div
        className="d-lg-none"
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          margin: "10px",
          zIndex: "10",
        }}
      >
        <a
          className="nav-link text-primary"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#signUpModal"
        >
          <img src="./pen.png" alt="" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
