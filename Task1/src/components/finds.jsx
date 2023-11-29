import React from "react";

export const Finds = (props) => {
  return (
    <div id="finds" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Finds</h2>
          <p>
          Discover unique and artistic treasures in our curated 'Finds' collection, where each piece is a story waiting to be told.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="find-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
