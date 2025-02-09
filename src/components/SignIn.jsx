import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./SignIn.css";

const SignIn = ({ setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="modal fade"
      id="signInModal"
      tabIndex="-1"
      aria-labelledby="signInModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg position-fixed position-sm-static start-0 end-0 m-0 ms-sm-auto me-sm-auto mt-sm-auto mb-sm-auto">
        <div className="modal-content rounded-0 rounded-sm-3">
          <div
            className="modal-header"
            style={{ backgroundColor: "#EFFFF4" }}
          >
            <h5
              className="modal-title fs-6"
              id="signInModalLabel"
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
              onClick={() => setIsLoggedIn(true)}
            />
          </div>

          <div className="modal-body d-flex flex-column flex-md-row px-4">
            <div className="w-100 w-md-50 pe-md-3">
              <h2 className="fs-3 mb-4">Sign In</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    className="form-control rounded-0"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control rounded-0"
                    placeholder="Password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-3 rounded-pill"
                >
                  Sign In
                </button>

                <div className="text-center d-flex d-md-none mb-3">
                  New User &nbsp;
                  <a
                    className="nav-link text-primary text-center"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#signUpModal"
                  >
                    Create Account
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
                Don't have an account? &nbsp;
                <a
                  className="nav-link text-primary d-inline"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#signUpModal"
                >
                  Sign Up
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
  );
};

export default SignIn;