import React from "react";

function Favourite() {
  return (
    <section className="container mx-auto mt-12">
      <h1 className="mb-5">Young’s Favourite</h1>
      <div className="flex flex-wrap justify-center lg:justify-between">
        <div className="max-w-[600px]">
          <img src="/img/favourite-01.jpg" alt="" />
          <h2>Trending on instagram</h2>
          <p>Explore Now!</p>
        </div>
        <div className="max-w-[600px]">
          <img src="/img/favourite-02.jpg" alt="" />
          <h2>Trending on instagram</h2>
          <p>Explore Now!</p>
        </div>
      </div>
    </section>
  );
}

export default Favourite;
