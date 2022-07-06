import React from "react";
import img1 from "./Photo/profieAvatar.jpg";
import { Link } from "react-router-dom";

export default function Rame() {
  return (
    <div className="profContainer">
      <div className="profileDIV">
        <img src={img1} alt="" className="avatar" />
      </div>
      <div className="buttonsDIV">
        <Link to="/profile">
          <button className="allBTN BTN-one" id="1">
            Profile Info
          </button>
        </Link>
        <Link to="/orders">
          <button className="allBTN BTN-two" id="2">
            შეკვეთები
          </button>
        </Link>
        <Link to="/payment">
          <button className="allBTN BTN-three" id="3">
            საგადასახადო
          </button>
        </Link>
        <Link to="/psw">
          <button className="allBTN BTN-four" id="4">
            პაროლის შეცვლა
          </button>
        </Link>
        <Link to="/logout">
          <button className="allBTN logOut">LOG OUT</button>
        </Link>
      </div>
    </div>
  );
}
