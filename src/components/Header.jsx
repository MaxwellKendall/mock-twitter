import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ setModal }) => {
  return (
    <div className="header">
      <h1>Mock Twitter</h1>
      <FontAwesomeIcon onClick={() => setModal(true)} icon={faPencilAlt} />
    </div>
  );
};
