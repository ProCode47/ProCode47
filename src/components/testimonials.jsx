import React from "react";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";

export default function Testimonials() {
  const Recommends = [
    {
      displayName: "Client",
      username: "@satisfiedclient",
      comment:
        "I'm very satisfied with his work. He is incredibly skilled and resourceful",
    },
    {
      displayName: "Chisom Udonsi",
      username: "@TheAce74",
      comment:
        "Victor is well adept. He can do alot with ease, and his code is so clean. Highly recommended!",
    },
    {
      displayName: "Ernesto",
      username: "@Ernesto_tech",
      comment:
        "Victor is a skilled and crafty developer. I've worked with him and I highly recommend him.",
    },

    {
      displayName: "Client",
      username: "@satisfiedclient",
      comment:
        "I'm very satisfied with his work. He is incredibly skilled and resourceful",
    },
    {
      displayName: "Chisom Udonsi",
      username: "@TheAce74",
      comment:
        "Victor is well adept. He can do alot with ease, and his code is so clean. Highly recommended!",
    },
    {
      displayName: "Ernesto",
      username: "@Ernesto_tech",
      comment:
        "Victor is a skilled and crafty developer. I've worked with him and I highly recommend him.",
    },

    {
      displayName: "Client",
      username: "@satisfiedclient",
      comment:
        "I'm very satisfied with his work. He is incredibly skilled and resourceful",
    },
    {
      displayName: "Chisom Udonsi",
      username: "@TheAce74",
      comment:
        "Victor is well adept. He can do alot with ease, and his code is so clean. Highly recommended!",
    },
    {
      displayName: "Ernesto",
      username: "@Ernesto_tech",
      comment:
        "Victor is a skilled and crafty developer. I've worked with him and I highly recommend him.",
    },
  ];
  return (
    <>
      <div class="testimonials" id="review">
        <span class="head m-sm">
          <h1>Testimonials</h1>
          <p class="hide-sm">what people say about me</p>
        </span>
        <motion.div
          initial={{ x: "-25%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 12,
            repeat: Infinity,
            type: "tween",
            repeatType: "mirror",
          }}
          className="review-profiles"
        >
          {Recommends.map((tweet) => (
            <div class="review-profile">
              <div class="profile-bar">
                <span>
                  <h4>{tweet.displayName}</h4>
                  <p>{tweet.username}</p>
                </span>
                <FaTwitter size={20} color="#64f4ac" />
              </div>
              <div class="profile-review">
                <p>{tweet.comment}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <br />
        <br />
        <br />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 12,
            repeat: Infinity,
            type: "tween",
            repeatType: "mirror",
          }}
          className="review-profiles"
        >
          {Recommends.map((tweet) => (
            <div class="review-profile">
              <div class="profile-bar">
                <span>
                  <h4>{tweet.displayName}</h4>
                  <p>{tweet.username}</p>
                </span>
                <FaTwitter size={20} color="#64f4ac" />
              </div>
              <div class="profile-review">
                <p>{tweet.comment}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
