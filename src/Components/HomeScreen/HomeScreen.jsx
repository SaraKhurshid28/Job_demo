import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../Constants/constants";
import { Button, Divider, Drawer } from "antd";
import "./HomeScreen.css";

export function HomeScreen() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("home");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (selectedMenu == "services") navigate("/services");
    else if (selectedMenu == "blogs") navigate("/blogs");
  }, [selectedMenu]);

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
          <p
            className="drawerTitle"
            key={"about"}
            onClick={() => navigate("/about")}
          >
            ABOUT
          </p>
          <p className="drawerTitle" onClick={() => navigate("/services")}>
            SERVICES
          </p>
          <p className="drawerTitle" onClick={() => navigate("/blogs")}>
            BLOG
          </p>
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
          {["home", "about", "services", "blogs"].map((item) => {
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
