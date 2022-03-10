import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background Image"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title text-info display-3 fw-bolder mb-0">
              New Season Arrival
            </h5>
            <p className="card-text text-info fw-bolder lead fd-2">
              Check out All The Brands
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
