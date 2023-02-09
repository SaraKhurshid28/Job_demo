import React from "react";
import Images from "../../Constants/constants";
import "./Services.css";

export function Services() {
  return (
    <>
      <div className="servicesMainContainer">
        <div className="mainHeadingContainer">SERVICES</div>
        <div className="mainItem">
          <div className="imageStyleBox">
            <img src={Images.Digital} />
          </div>
          <div className="textStyleLeft">SOCIAL MEDIA MARKETING</div>
        </div>
        <div className="mainItem">
          <div className="textStyleRight">PPC CAMPAIGNS</div>
          <div className="imageStyleBox">
            <img src={Images.PPC} />
          </div>
        </div>
        <div className="mainItem">
          <div className="imageStyleBox">
            <img src={Images.Assest} />
          </div>
          <div className="textStyleLeft textSearchFont">
            SEARCH ENGINE OPTIMIZATION
          </div>
        </div>
        <div className="mainItem">
          <div className="textStyleRight">SOCIAL MEDIA MARKETING</div>
          <div className="imageStyleBox">
            <img src={Images.Consult} />
          </div>
        </div>
      </div>
    </>
  );
}
