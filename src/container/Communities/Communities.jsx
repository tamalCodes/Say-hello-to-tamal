/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-quotes */
import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Community.scss";
import communityData from "./communityData";

const Communities = () => (
  <>
    <h2 className="head-text">
      {" "}
      Giving back to <span>the community 💙 </span> <br />
    </h2>

    <div className="comm_cardsdiv">
      {communityData.map((el, index) => (
        <a className="comm_card" href={el.tweetlink} target="_blank" rel="noreferrer" >

          <img src={el.img} alt={el.title} />

          <h2 className="abthead" style={{ marginTop: 20 }}>
            {el.title}
          </h2>

          <p className="abtdesc" style={{ marginTop: 25 }}>
            {el.description}
          </p>

        </a>
      ))}
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Communities, "app__about"),
  "community work",
  "app__primarybg"
);
