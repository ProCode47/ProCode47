import React from "react";

export default function Footer() {
  return (
    <>
      <div class="footer" id="contact">
        <div class="contact col-sm">
          <div class="sayhi col-item">
            <h2 class="text-md">Lets' make something amazing together.</h2>
            <h2>
              Start by <a href="https://wa.link/sdztx2">saying hello</a>
            </h2>
          </div>
          <div class="info col-item">
            <h6>Information</h6>
            <p>7 Mataco Avenue, Iriebe, Port Harcourt, Nigeria.</p>
            <h2 class="text-xs">iloenyenwavictor@gmail.com</h2>
            <span>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Works</a>
              </li>
              <li>
                <a href="#review">Reviews</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </span>
          </div>
        </div>
        <div class="stamp col-sm">
          <h2 class="col-item center">
            <b>shadowbytee</b>
          </h2>
          <span class="credits col-center col-item neg-marg">
            <p className="center">
              <a href="https://dribbble.com/shots/11276631-DS-Personal-Developer-Portfolio/attachments/2884963?mode=media">
                dribble
              </a>
            </p>
            <p className="center">
              <a href="https://twitter.com/shadowbytee">github</a>
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
