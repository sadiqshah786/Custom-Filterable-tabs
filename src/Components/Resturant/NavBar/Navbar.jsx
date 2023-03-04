import React, { useState } from "react";
import MenuDataApi from "../menuApi";

const Navbar = ({ filterMenu, List }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center cursor-pointer">
        {List.map((cat) => {
          return (
            <button className="btn-group__item" onClick={() => filterMenu(cat)}>
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
