import React from "react";
import PropTypes from "prop-types";

export const Tweet = ({ timestamp, text, user }) => {
  return (
    <div className="tweet">
      <p className="tweet__timestamp">{timestamp}</p>
      <p className="tweet__text">{`${user}: ${text}`}</p>
    </div>
  );
};

Tweet.propTypes = {
  text: PropTypes.string
};
Tweet.defaultProps = {};
