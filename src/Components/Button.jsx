import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const Button = ({ color, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        Add Product
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelblue",
};
Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
