import React from "react";
import Arrival from "./Arrival";

function Arrivals() {
  return (
    <div className="container mx-auto">
    <h1 className="text-center lg:text-left">NEW ARRIVALS</h1>
      <div className="flex justify-center lg:justify-center gap-5 flex-wrap">
        <Arrival
          img="/img/arrival-1.jpg"
          heading="Hoodies & Sweetshirt"
          paragraph="Explore Now!"
        />
        <Arrival
          img="/img/arrival-2.jpg"
          heading="Coats & Parkas"
          paragraph="Explore Now!"
        />
        <Arrival
          img="/img/arrival-3.jpg"
          heading="Tees & T-Shirt"
          paragraph="Explore Now!"
        />
      </div>
    </div>
  );
}

export default Arrivals;
