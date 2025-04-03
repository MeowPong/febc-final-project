import React from "react";
import MainLayout from "../components/MainLayout";
import GoogleIcon from "../assets/icon/google-icon.svg";
import FacebookIcon from "../assets/icon/facebook-icon.svg";
import AppleIcon from "../assets/icon/apple-icon.svg";
import MicrosoftIcon from "../assets/icon/microsoft-icon.svg";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <MainLayout>
      <div className="container">
        <form className="mt-5">
          <h1 className="fs-1 fw-semibold text-center">Sign in</h1>
          <p className="text-center fs-6 fw-medium">
            Welcome back to your e-Learning website!
          </p>
          <div className="mb-3 mt-5">
            <label for="Email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="Password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="Password" />
          </div>
          <div className="d-flex justify-content-between">
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            <p>Forgot Password?</p>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100">
              SIGN IN
            </button>
          </div>
          <div class=" d-flex justify-content-center align-items-center mt-3">
            <div
              className="bg-secondary"
              style={{ height: "0.10rem", width: "6rem" }}
            ></div>
            <p className="text-secondary mt-2 mx-1">or sign up with</p>
            <div
              className="bg-secondary"
              style={{ height: "0.10rem", width: "6rem" }}
            ></div>
          </div>
          <div class=" d-flex justify-content-center align-items-center mt-3 gap-3">
            <button
              className="btn btn-outline-secondary d-flex justify-content-center align-items-center"
              style={{ width: "4rem", height: "2.5rem" }}
            >
              <img
                src={GoogleIcon}
                alt="Google icon"
                style={{ width: "1rem" }}
              />
            </button>
            <button
              className="btn btn-outline-secondary d-flex justify-content-center align-items-center"
              style={{ width: "4rem", height: "2.5rem" }}
            >
              <img
                src={FacebookIcon}
                alt="Facebook icon"
                style={{ width: "1rem" }}
              />
            </button>
            <button
              className="btn btn-outline-secondary d-flex justify-content-center align-items-center"
              style={{ width: "4rem", height: "2.5rem" }}
            >
              <img src={AppleIcon} alt="Apple icon" style={{ width: "1rem" }} />
            </button>
            <button
              className="btn btn-outline-secondary d-flex justify-content-center align-items-center"
              style={{ width: "4rem", height: "2.5rem" }}
            >
              <img
                src={MicrosoftIcon}
                alt="Microsoft icon"
                style={{ width: "1rem" }}
              />
            </button>
          </div>
          <div className="d-flex justify-content-center gap-2 mt-4">
            <p>Don't have an account?</p>
            <Link to="/SignUp">
              <p className="text-primary fw-medium">Sign up</p>
            </Link>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default SignIn;
