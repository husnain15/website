import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10  mx-auto">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/Levi%2C_Kittila_-_Finland_-_panoramio_-_aristidov_%287%29.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.body}</p>
            <Link to="/detail" className="btn btn-primary">
              Go Detailed
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
