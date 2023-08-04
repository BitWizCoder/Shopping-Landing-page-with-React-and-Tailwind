function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center text-center lg:text-left lg:flex-row justify-between bg-slate-200 mt-14 p-20 rounded-3xl gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl lg:text-7xl font-semibold">
          LET’S <br /> EXPLORE <br /> UNIQUE <br /> CLOTHES.
        </h1>
        <p className="text-base lg:text-2xl">
          Live for Influential and Innovative fashion!
        </p>
        <div>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-xl">
            Shop Now
          </button>
        </div>
      </div>
      <div className="max-w-[500px]">
        <img src="img/hero-girl.png" alt="" />
      </div>
    </section>
  );
}

export default Hero;
