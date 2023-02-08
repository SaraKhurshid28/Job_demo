import React, { useState } from "react";
import Images from "../../Constants/constants";
import { Button, Divider, Drawer, Menu } from "antd";
import "./HomeScreen.css";

export function HomeScreen() {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items = [
    "Menu 1",
    {
      type: "divider",
    },
  ];
  return (
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(${Images.MainBackground})`,
      }}
    >
      <div className="headerContainer">
        <img src={Images.Logo} height={76} width={103} alt="logo" />
        <Button height={76} onClick={showDrawer}>
          <img src={Images.MainDrawer} height={76} width={103} alt="logo" />
        </Button>
        <Drawer
          placement="right"
          onClose={onClose}
          open={open}
          width={200}
          closable={false}
        >
          <div className="drawerTitle">MAIN MENU</div>
          <Divider className="dividerStyle" />
          <p className="drawerTitle">ABOUT</p>
          <p className="drawerTitle">SERVICES</p>
          <p className="drawerTitle">BLOG</p>
        </Drawer>
      </div>
      <div className="constStyle">
        <div>
          <div className="textContainer">TALHA FAKHAR</div>
          <div>
            <div className="digitTextContainer">
              A DIGITAL MARKETING EXPERT
              <div className="borderConatiner"> </div>
            </div>
          </div>
        </div>
        <div>
          {[0, 1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div
                key={item}
                className={
                  selectedMenu == item
                    ? "sideItemsSelected"
                    : "sideItemsNonselected"
                }
                onClick={() => setSelectedMenu(item)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
