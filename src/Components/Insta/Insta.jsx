import React from "react";
import Images from "../../Constants/constants";
import "./Insta.css";

const Insta = () => {
  return (
    <>
      <div className="instaMainContainer">
        <div className="instaMainHeader">
          <div>
            <img src={Images.InstaImage} alt="insta image" />
          </div>
          <div className="instaVerticalLine"></div>
          <div className="instaHeadingContainer">thetalhafakhar</div>
        </div>
      </div>
    </>
  );
};

export default Insta;
