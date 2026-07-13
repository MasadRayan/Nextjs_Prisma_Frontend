"use client";
import React from "react";

const DislikeButton = ({ blogSlug }: { blogSlug: string }) => {
  return (
    <button
        className="text-red-500 underline italic"
      onClick={() => {
        console.log(`Disliked The blog ${blogSlug}`);
      }}
    >
      Dislike
    </button>
  );
};

export default DislikeButton;
