import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Search from "./components/search/Search";
import Driver from "./components/driver/Driver";
import Luxury from "./components/luxury/Luxury";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
