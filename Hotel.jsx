import React from "react";
import Nav from "./Nav";
import HeaderSlide from "./HeaderSlide";
import Check_in from "./Check_in";
import Our_Service from "./Our_service";
import Hotel_Welcome from "./Hotel_Welcome";
import "./Hotel.css";

function Hotel() {
  return (
    <>
      <div>
        <Nav />
      </div>

      <HeaderSlide />
      <Check_in />
      <Our_Service />
      <Hotel_Welcome />
    </>
  );
}

export default Hotel;
