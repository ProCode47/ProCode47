import React from "react";
import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";
import { loader } from "./loader";
import resume from "../assets/resume.pdf";

export default function Header() {
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState(!modalState);
  };
  useEffect(() => {
    loader();
  }, []);
  return (
    <>
      <div id="overlay" className="preloader">
        <h1 id="loader"></h1>
      </div>
      <header>
        <div class="brand text-sm">
          <b>Iloenyenwa</b>Victor
        </div>
        <div class="nav nav-links hide-sm">
          <li class="nav-item">
            <a href="#about"> About</a>
          </li>
          <li class="nav-item">
            <a href="#work">Works</a>
          </li>
          <li class="nav-item">
            <a href="#review">Reviews</a>
          </li>
          <li class="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </div>
        <div class="social">
          <li class="social-item hide-sm">
            <FaTwitter style={{ marginRight: 10 }} />
            <a href="https://twitter.com/shadowbytee"> Twitter</a>
          </li>
          <li class="social-item hide-sm">
            <FaGithub style={{ marginRight: 10 }} />
            <a href="https://github.com/procode47"> Github</a>
          </li>
          <li class="social-item hide-sm">
            <div class="circle hide-sm">
              <a href="mailto:iloenyenwavictor@gmail.com">
                <FiMail color="#64f4ac" />
              </a>
            </div>
          </li>
          <div
            onClick={() => toggleModal()}
            class={`show-sm hide-lg hamburger ${modalState ? `change-bg` : ``}`}
          >
            <div
              class={`line line1 ${modalState ? `transform-line1` : ``}`}
            ></div>
            <div
              class={`line line2 ${modalState ? `transform-line2` : ``}`}
            ></div>
            <div
              class={`line line3 ${modalState ? `transform-line3` : ``}`}
            ></div>
          </div>
        </div>
      </header>
      <div className={`menu ${modalState ? `expand-menu` : ``}`}>
        <div className="menu-items">
          <h2>shadowbytee</h2>
          <span>
            <FaTwitter
              onClick={() => {
                window.open("https://twitter.com/shadowbytee", "_blank");
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
            <FaFacebook
              onClick={() => {
                window.open(
                  "https://web.facebook.com/profile.php?id=100056300683502",
                  "_blank"
                );
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
            <FaLinkedin
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/iloenyenwa-victor-350a5320b/",
                  "_blank"
                );
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
            <FaGithub
              onClick={() => {
                window.open("https://github.com/ProCode47", "_blank");
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
            <FaWhatsapp
              onClick={() => {
                window.open("https://wa.link/sdztx2", "_blank");
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
            <FaStackOverflow
              onClick={() => {
                window.open("https://stackoverflow.com/", "_blank");
              }}
              size={20}
              style={{ width: "33%", marginBottom: 15 }}
            />
          </span>
          <a href={resume} download="resume" target="_blank">
            <h3>
              {" "}
              download resume <FiDownload />{" "}
            </h3>
          </a>

          <h2> menu </h2>
          <div className="menu_list">
            <a onClick={() => toggleModal()} class="menu-link" href="#about">
              {" "}
              about
            </a>
            <a onClick={() => toggleModal()} class="menu-link" href="#work">
              works
            </a>
            <a onClick={() => toggleModal()} class="menu-link" href="#review">
              reviews
            </a>
            <a onClick={() => toggleModal()} class="menu-link" href="#contact">
              contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
