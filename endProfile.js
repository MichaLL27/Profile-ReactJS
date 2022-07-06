import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link1, Link2, Link3, Link4, Link5 } from "./none";
import Rame from "./profile";

function EndProfile() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rame />} />
          <Route path="/profile" element={<Link1 />} />
          <Route path="/orders" element={<Link2 />} />
          <Route path="/payment" element={<Link3 />} />
          <Route path="/psw" element={<Link4 />} />
          <Route path="/logout" element={<Link5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { EndProfile };
