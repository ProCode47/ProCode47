import React from "react";
import { FiCode, FiDatabase, FiDownload, FiSmartphone } from "react-icons/fi";

export default function About() {
  return (
    <>
      <div class="about col-sm" id="about">
        <div class="about-tabs col-item m-0">
          <div class="tab m-sm">
            <div class="text">
              <h2>Front-End</h2>
              <p>I bring beautiful designs to life with code</p>
              <p class="project">30 PROJECTS</p>
            </div>
            <div class="icon">
              <FiCode color="#64f4ac" size={25}/>
            </div>
          </div>
          <div class="tab m-sm">
            <div class="text">
              <h2>Back-End</h2>
              <p>I create secure and scalable server side services</p>
              <p class="project">20 PROJECTS</p>
            </div>
            <div class="icon">
              <FiDatabase color="#64f4ac" size={25}/>
            </div>
          </div>
          <div class="tab m-sm">
            <div class="text">
              <h2>Mobile</h2>
              <p>
                I develop engaging native applications on both Andriod and IOS
              </p>
              <p class="project">10 PROJECTS</p>
            </div>
            <div class="icon">
              <FiSmartphone color="#64f4ac" size={25}/>
            </div>
          </div>
        </div>
        <div class="about-text col-item p-adjust">
          <p>the introduction</p>
          <h2 class="text-center txt-dmn">
            Hi buddy ✌ <br />
            I'm Iloenyenwa Victor
          </h2>
          <i class="quote text-xs">
            the journey of a thousand lines of code begins with one Hello
            World...
          </i>
          <p>
            Looking back from when i wrote my first line of HTML, it has been a
            rollercoaster. From feeling like a genius when the code runs on
            first try to sleepless hours surfing on stackoverflow because of a
            missing semi-colon. Nevertheless, I've done remote work for clients
            and i've collaborated with alot of talented individuals to create
            digital products and resources. I'm quietly confident, naturally
            curious and perpetually working on mastering my craft.
          </p>
          <button class="text-xs">
            Download Resume <FiDownload/>
          </button>
        </div>
      </div>
    </>
  );
}
