import React from "react"
import image1 from "../assets/strapi-2.svg" 
import image2 from "../assets/svelte-1.svg" 
import image3 from "../assets/tailwind-css-2.svg" 
import image4 from "../assets/typescript.svg" 
import image5 from "../assets/graphql.svg" 
import image6 from "../assets/yarn.svg" 
import image7 from "../assets/material-ui-1.svg" 
import image8 from "../assets/heroku-4.svg" 
import image9 from "../assets/npm.svg" 
import image10 from "../assets/sass.svg" 
import image11 from "../assets/html.svg" 
import image12 from "../assets/css.svg" 
import image13 from "../assets/visual-studio-code.svg" 
import image14 from "../assets/node-js.svg" 
import image15 from "../assets/vue-js.svg" 
import image16 from "../assets/react-js.svg" 
import image17 from "../assets/redux.svg" 
import image18 from "../assets/react-native-1.svg" 
import image19 from "../assets/undraw_dev_productivity_umsq.svg"

export default function Tech() {
  return (
    <>
      <div class="tools m-sm">
        <div class="tools-text">
          <div class="tab p-sm">
            <div class="text">
              <h2>Tools & Technologies</h2>
              <p class="text-sm">
                These are a few of the tools & frameworks i currently use or i
                have worked with either on a job or casual try-outs...
                throughout my tech career
              </p>
              <p class="project">Over 35+ TOOLS</p>
            </div>
            <div class="icon">
              <i class="fa fa-wrench"></i>
            </div>
          </div>
        </div>

        <div class="universe row-adjust">
          <div class="planet1 planet row-item">
            <img src={image1} alt="" />
          </div>
          <div class="planet2 planet row-item">
            <img src={image2} alt="" />
          </div>
          <div class="planet3 planet row-item">
            <img src={image3} alt="" />
          </div>
          <div class="planet4 planet row-item">
            <img src={image4} alt="" />
          </div>
          <div class="planet5 planet row-item">
            <img src={image5} alt="" />
          </div>
          <div class="planet6 planet row-item">
            <img src={image6} alt="" />
          </div>
          <div class="planet7 planet row-item">
            <img src={image7} alt="" />
          </div>
          <div class="planet8 planet row-item">
            <img src={image8} alt="" />
          </div>
          <div class="planet9 planet row-item">
            <img src={image9} alt="" />
          </div>
          <div class="planet10 planet row-item">
            <img src={image10} alt="" />
          </div>
          <div class="planet11 planet row-item">
            <img src={image11} alt="" />
          </div>
          <div class="planet12 planet row-item">
            <img src={image12} alt="" />
          </div>
          <div class="planet13 planet row-item">
            <img src={image13} alt="" />
          </div>
          <div class="planet14 planet row-item">
            <img src={image14} alt="" />
          </div>
          <div class="planet15 planet row-item">
            <img src={image15} alt="" />
          </div>
          <div class="planet16 planet row-item">
            <img src={image16} alt="" />
          </div>
          <div class="planet17 planet row-item">
            <img src={image17} alt="" />
          </div>
          <div class="planet18 planet row-item">
            <img src={image18} alt="" />
          </div>

          <img
            class="hide-sm"
            src={image19}
          />
        </div>
      </div>
    </>
  );
}
