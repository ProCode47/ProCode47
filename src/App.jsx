import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Tech from "./components/tech";
import Testimonials from "./components/testimonials";
import Works from "./components/works";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <button onclick="topFunction()" id="topbtn" title="Go to top">
        <FaChevronUp/>
      </button>
      <Header />
      <Hero />
      <About />
      <Tech />
      <Works />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
