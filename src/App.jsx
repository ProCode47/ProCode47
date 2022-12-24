import { useState } from "react";
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
      <button onclick="topFunction()" id="top-button" title="Go to top">
        <i class="fas fa-2x fa-angle-up"></i>
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
