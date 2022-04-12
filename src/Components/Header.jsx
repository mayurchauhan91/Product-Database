import PropTypes from "prop-types";
import Button from "./Button";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/AddData">
        <Button />
      </Link>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
