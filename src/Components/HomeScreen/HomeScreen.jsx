import React from "react";
import Images from "../../Constants/constants";
import "./HomeScreen.css";

export function HomeScreen() {
  return (
    <div
      className="mainContainer"
      style={{ backgroundImage: `url(${Images.MainBackground})` }}
    >
      <div className="headerContainer">
        <img src={Images.Logo} height={76} width={103} alt="logo" />
        <img src={Images.MainDrawer} height={76} width={103} alt="logo" />
      </div>
    </div>
  );
}
