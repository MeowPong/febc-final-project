import React from "react";
import MainLayout from "../components/MainLayout";
import NotFoundImage from "../assets/NotFoundImage.webp";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <MainLayout>
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <img
            src={NotFoundImage}
            alt="Not Found Image"
            style={{ width: "16rem" }}
          />
        </div>
        <div className="text-center">
          <p className="fw-bold" style={{ fontSize: "6rem" }}>
            404
          </p>
          <p className="fs-4 fw-semibold">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/">
            <div className="btn btn-primary btn-lg">Go to Homepage</div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default NotFound;
