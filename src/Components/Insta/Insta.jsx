import React from "react";
import { Row, Col } from "antd";
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
        <div className="instaRowDiv">
          <Row justify="center" className="instaRowContainer">
            <Col span={8}>
              <img
                src={Images.SeptImage}
                width={280}
                height={280}
                alt="Image Not Found"
              />
            </Col>
            <Col span={8}>
              <img
                src={Images.OctImage2}
                width={280}
                height={280}
                alt="Image Not Found"
              />
            </Col>
            <Col span={8}>
              <img
                src={Images.OctImage}
                width={280}
                height={280}
                alt="Image Not Found"
              />
            </Col>
          </Row>
          <Row justify="center" className="instaRowContainer">
            <Col span={8}>
              <img
                src={Images.ITImage2}
                width={280}
                height={280}
                alt="Image Not Found"
              />
            </Col>
            <Col span={8}>
              <img
                src={Images.GrowImage}
                width={280}
                height={280}
                alt="Image Not Found"
              />
            </Col>
            <Col span={8}>
              <img
                src={Images.TFImage}
                width={280}
                height={280}
                alt="Image Not Found"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Insta;
