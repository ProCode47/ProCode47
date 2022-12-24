import React from "react";
import image1 from "../assets/undraw_dev_productivity_umsq.svg";
import image2 from "../assets/react-js.svg" 
import image3 from "../assets/redux.svg" 
import image4 from "../assets/node-js.svg" 

export default function Hero() {
  return (
    <>
      <div class="hero col-sm-r">
        <div class="hero-text col-item">
          <div class="main-text m-1">
            <div class="badge">Full-Stack Developer</div>
            <h2>Talk is cheap.</h2>
            <h2>Show me the code.</h2>
            <p>
              I design and code beautiful simple things and i totally love what
              i do.
            </p>

            <a href="https://wa.link/sdztx2"> Let's Chat! </a>
          </div>

          <div class="stats">
            <div class="stat">
              <b> 4 </b>
              <span>
                <p>YEARS</p>
                <p>EXPERIENCE</p>
              </span>
            </div>
            <div class="stat">
              <b> 25 </b>
              <span>
                <p>PROJECTS COMPLETED</p>
                <p class="hide-sm">ON WEB AND MOBILE</p>
              </span>
            </div>
          </div>
        </div>
        <div class="hero-img col-item m-md">
          <img src={image1} />
          <img class="tech rotate react hide-sm" src={image2} />
          <img class="tech float redux hide-sm" src={image3} />
          <img class="tech zoom js hide-sm" src={image4} />
        </div>
      </div>
    </>
  );
}
