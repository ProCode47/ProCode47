import React from "react";
import image1 from '../assets/portfolio.png'
import image2 from '../assets/screenshot.png'
import image3 from '../assets/quotes.png'
import { FaReact, FaSass, FaCodeBranch, FaNodeJs, FaLeaf} from "react-icons/fa";

export default function Works() {
  return (
    <>
      <div class="works work-adjust" id="work">
        <div class="intro">
          <span>
            <h1>Latest Works</h1>
            <p>Perfect solutions to digital experience</p>
          </span>
        </div>
        <div class="card card1">
          <div class="card-head">
            <h2>My Portfolio</h2>
            <span>
              <h3>
               <FaReact/> React
              </h3>
              <h3>
              <FaSass/> SASS
              </h3>
            </span>
          </div>

          <div class="card-img" title="portfolio">
             {/* <img src={image1}/> */}
          </div>
        </div>
        <div class="card card2">
          <div class="card-head">
            <h2>Unsplattr</h2>
            <span>
              <h3>
                <FaReact/> React
              </h3>
              <h3>
                <FaCodeBranch/> Unsplash
              </h3>
            </span>
          </div>

          <div class="card-img" title="cinematic">
          {/* <img src={image2}/> */}
          </div>
        </div>

        <div class="card card3">
          <div class="card-head">
            <h2>Unik API</h2>
            <span>
              <h3>
                <FaNodeJs/> Node
              </h3>
              <h3>
               <FaLeaf/> MongoDB
              </h3>
            </span>
          </div>

          <div class="card-img" title="gitsearch">
          {/* <img src={image3}/> */}
          </div>
        </div>
        <div class="outro">
          <h1>ALL PROJECTS</h1>
          <p class="text-center">
            Looking for more of my projects? You can always check out my
            <a href="https://github.com/procode47"> Github</a>
          </p>
        </div>
      </div>
    </>
  );
}
