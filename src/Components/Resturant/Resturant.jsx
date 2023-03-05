import React, { useState } from "react";
import MenuCard from "./MenuCard/MenuCard";
import MenuDataApi from "./menuApi";
import Navbar from "./NavBar/Navbar";

const Resturant = () => {
  // const cats = MenuDataApi.map(q => q.category);
  // const List = cats.filter((q, idx) =>  cats.indexOf(q) === idx)
  const List = [
    "All",
    ...new Set(
      MenuDataApi.map((items) => {
        return items.category;
      })
    ),
  ];
  const [menuData, setMenuData] = useState(MenuDataApi);
  const filterMenu = (category) => {
    if (category === "All") {
      setMenuData(MenuDataApi);
      return;
    }
    const Updatelist = MenuDataApi.filter((value) => {
      return value.category === category;
    });
    setMenuData(Updatelist);
  };

  return (
    <div className="w-4/5 m-auto my-5">
      <div>
        <Navbar filterMenu={filterMenu} List={List} />
      </div>
        <MenuCard menuData={menuData} />
    </div>
  );
};

export default Resturant;
