import React from "react";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";

export default function Testimonials() {
  const Recommends = [
    {
      displayName: "Shadow Byte",
      username: "theshadowthatbites",
      comment:
        "this is fooking amazing fam by the order of the fooking peaky blinders!!",
    },
    {
      displayName: "Shadow Byte",
      username: "theshadowthatbites",
      comment:
        "this is fooking amazing fam by the order of the fooking peaky blinders!!",
    },
    {
      displayName: "Shadow Byte",
      username: "theshadowthatbites",
      comment:
        "this is fooking amazing fam by the order of the fooking peaky blinders!!",
    },
    {
      displayName: "Shadow Byte",
      username: "theshadowthatbites",
      comment:
        "this is fooking amazing fam by the order of the fooking peaky blinders!!",
    },
    {
      displayName: "Shadow Byte",
      username: "theshadowthatbites",
      comment:
        "this is fooking amazing fam by the order of the fooking peaky blinders!!",
    },
    {
      displayName: "Shadow Byte",
      username: "theshadowthatbites",
      comment:
        "this is fooking amazing fam by the order of the fooking peaky blinders!!",
    },
    {
      displayName: "Shadow Byte",
      username: "theshadowthatbites",
      comment:
        "this is fooking amazing fam by the order of the fooking peaky blinders!!",
    },
    {
      displayName: "Shadow Byte",
      username: "theshadowthatbites",
      comment:
        "this is fooking amazing fam by the order of the fooking peaky blinders!!",
    },
    {
      displayName: "Shadow Byte",
      username: "theshadowthatbites",
      comment:
        "this is fooking amazing fam by the order of the fooking peaky blinders!!",
    },
  ];
  return (
    <>
      <div class="testimonials" id="review">
        <span class="head m-sm">
          <h1>Testimonials</h1>
          <p class="hide-sm">what clients say about me</p>
        </span>
        <motion.div
          initial={{ x: "-25%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 15,
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
                  <p>@{tweet.username}</p>
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
            duration: 15,
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
                  <p>@{tweet.username}</p>
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
