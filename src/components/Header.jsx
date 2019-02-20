import React from "react";

export const Header = ({ setModal }) => {
  return (
    <div className="header">
      <h1>Mock Twitter</h1>
      <button onClick={() => setModal(true)} className="header__tweet-btn">
        Tweet
      </button>
    </div>
  );
};
