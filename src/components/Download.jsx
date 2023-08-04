import React from "react";

function Download() {
  return (
    <section className="container mx-auto flex flex-col items-center lg:justify-around lg:items-center lg:flex-row flex-wrap mt-20">
      <div>
        <h1>
          DOWNLOAD APP & <br />
          GET THE VOUCHER!
        </h1>
        <p>
          Get 30% off for first transaction using <br />
          Rondovision mobile app for now.
        </p>
        <div>
          <img src="/img/appstore-download.jpg" alt="" />
          <img src="/img/playstore-download.jpg" alt="" />
        </div>
      </div>
      <div className="max-w-[327px]">
        <img src="/img/mobile-app.png" alt="" />
      </div>
    </section>
  );
}

export default Download;
