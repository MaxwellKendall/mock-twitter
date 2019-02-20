import React from "react";
import PropTypes from "prop-types";

export const Tweet = ({ created_at, id, id_str, text, user, entities }) => {
  return (
    <div className="tweet">
      <p className="tweet__text">{text}</p>
    </div>
  );
};

Tweet.propTypes = {
  text: PropTypes.string
};
Tweet.defaultProps = {};
