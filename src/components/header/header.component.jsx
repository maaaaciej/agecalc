import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header_title">Age Tracker</h2>
      <h3>
        Made by <a href="https://github.com/maaaaciej">Maciej Ostrowski</a>
      </h3>
    </div>
  );
};

export default Header;
