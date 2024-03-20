import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import picture from "../images/Me.png"


function Upper(){
  return(
    <div>
      <div className="image-holder">
      <img src={picture} alt="A Picture Of Me" />
      </div>
      <div className="details">
      <h1 className="name">Awwal Mudashir</h1>
      <p className="job">Aptech Student</p>
      <div className="buttons">
        <button className="e-button">
        <FaEnvelope  style={{
          color: "black",
          marginTop: "1px",
          marginLeft: "5px",
        }} />
          <small>Email</small>
        </button>
        <button className="l-button">
        <FaLinkedinIn  style={{
          color: "white",
          marginLeft: "5px",
        }} />
         <small>LinkledIn</small>
        </button>
      </div>
        </div>
    </div>

  );
}

export default Upper;