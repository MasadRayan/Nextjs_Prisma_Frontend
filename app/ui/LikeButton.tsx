"use client"
import React from "react";

const LikeButton = () => {
  return (
    <button
    className="text-blue-500 underline italic"
      onClick={() => {
        console.log("Hi this is ike button");
      }}
    >
      Like
    </button>
  );
};

export default LikeButton;
