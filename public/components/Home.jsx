import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 ">
              <input
                className="form-control me-4 "
                type="search"
                placeholder="Search Any Title Here"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              {data
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (searchTerm === "") {
                    <h3>No value to matched</h3>;
                  }
                })
                .map((data) => {
                  return (
                    <Card key={data.id} title={data.title} body={data.body} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

/* <li key={data.id}>
  {data.name}
  <br></br>
  {data.email}
</li>; */

/* <button type="button" className="btn btn-primary">
            &larr;Previous
          </button>
          <button type="button" className="btn btn-primary">
            Next &rarr;
          </button> */
// <div className="container d-flex justify-content-between"></div>
