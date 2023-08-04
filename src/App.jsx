import React, { Fragment } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Arrivals from "./components/Arrivals";
import Sale from "./components/Sale";
import Favourite from "./components/Favourite";
import Download from "./components/Download";
import Newletter from "./components/Newletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Company />
      <Arrivals />
      <Sale />
      <Favourite />
      <Download />
      <Newletter />
      <Footer />
    </>
  );
}

export default App;
