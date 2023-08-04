import React from "react";

function Sale() {
  return (
    <section className="mt-24 bg-[#E0C340]">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-around bg-[#E0C340 ]">
        <div>
          <img src="/img/sale.png" alt="" className="max-w-md" />
        </div>
        <div>
          <h1 className="text-8xl font-bold mb-5">
            PAYDAY <br />
            SALE NOW
          </h1>
          <p className="mb-5">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p className="font-bold">1 June - 10 June 2021</p>
          <p>*Terms & Conditions apply</p>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-6">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sale;
