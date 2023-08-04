import React from "react";

function Arrival(props) {
  return (
    <div className="max-w-[404px]">
      <img src={props.img} alt=""/>
      <h2>{props.heading}</h2>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default Arrival;
