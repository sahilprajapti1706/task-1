import React, { useContext } from "react";
import SignIn from "./SignIn";
import { UserContext } from "../context/UserContext";

const SignUp = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <>
      <div
        className="modal fade "
        
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#EFFFF4" }}
            >
              <h5
                className="modal-title fs-6 "
                id="signUpModalLabel"
                style={{ color: "#008A45" }}
              >
                <p className="d-none d-md-flex">
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </p>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column flex-md-row px-4">
              <div className="w-100 w-md-50 pe-md-3">
                <h2 className="fs-3 mb-4">Create Account</h2>
                <form onSubmit={(e) => submitHandler(e)}>
                  <div className="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control rounded-0"
                        placeholder="First Name"
                        required
                      />
                      <input
                        type="text"
                        className="form-control rounded-0"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="">
                    <input
                      type="email"
                      className="form-control rounded-0"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="">
                    <input
                      type="password"
                      className="form-control rounded-0"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control rounded-0"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn  btn-primary w-100 mb-3 rounded-pill"
                    data-bs-dismiss="modal"
                  >
                    Create Account
                  </button>

                  <div className="text-center d-flex d-md-none mb-3">
                    Already have an account? &nbsp;
                    <a
                      className="nav-link text-primary  text-center"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#signInModal"
                    >
                      Sign In
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-100 mb-2 d-flex gap-2 justify-content-center align-items-center"
                  >
                    <img src="./fb.png" alt="Facebook Logo" /> Sign up with
                    Facebook
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-danger w-100 d-flex gap-2 justify-content-center align-items-center"
                  >
                    <img src="./googe.png" alt="Google Logo" /> Sign up with
                    Google
                  </button>
                </form>
              </div>

              <div className="w-100 w-md-50 d-none d-md-flex flex-column align-items-center justify-content-center mt-4 mt-md-0">
                <p className="text-center mt-3">
                  Already have an account? &nbsp;
                  <a
                    className="nav-link text-primary d-inline"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#signInModal"
                  >
                    Sign In
                  </a>
                </p>

                <img
                  src="./form.png"
                  alt="Sign Up"
                  className="img-fluid mb-3"
                />

                <p
                  className="text-center text-muted"
                  style={{ fontSize: "0.8rem" }}
                >
                  By signing up, you agree to our{" "}
                  <a href="#">Terms & Conditions</a>,{" "}
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignIn />
    </>
  );
};

export default SignUp;
