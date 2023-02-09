import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import "./Blog.css";
import Images from "../../Constants/constants";

const Blog = () => {
  return (
    <div className="blogMainContainer">
      <div className="blogMainHeading">BLOG</div>
      <div className="blogImageData">
        <div className="col_styleImage">
          <img src={Images.BlogImage4} altr="blog image 4" />
        </div>

        <div className="col_style">
          <div>
            <img src={Images.BlogImage3} altr="blog image 3" />
          </div>
          <div className="blogImageText">
            Lorem ipsum dolor sit amet, consecte
          </div>
        </div>
        <div className="col_style">
          <div>
            <img src={Images.BlogImage2} altr="blog image 2" />
          </div>
          <div className="blogImageText">
            Lorem ipsum dolor sit amet, consecte
          </div>
        </div>
        <div className="col_styleImage">
          <img src={Images.BlogImage1} altr="blog image 1" />
        </div>
      </div>
      <div className="blogMoreButtoDiv">
        {" "}
        Read More <DoubleRightOutlined />
      </div>
    </div>
  );
};

export default Blog;
