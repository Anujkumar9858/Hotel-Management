import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import FirstImage from "./Images/Images/first.jpg"
import SecondImage from "./Images/Images/second.jpg";
import ThirdImage from "./Images/Images/third.jpg";
 import "./headerslide.css"
function HeaderSlide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <div className="slider">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="item">
        <img className="first w-100" src={FirstImage} alt="First slide" />
        <Carousel.Caption>
          <div className="index">
            <br />
            <br />
          <h3 id="txt1" >LUXURY LIVING</h3>
          <h1 id="txt2">Discover A Brand </h1>
          <h1 id="txt2"> Luxurious Hotels</h1>
          <button href=" " id="main">OUR ROOMS</button>
          <button  href=" " id="main1">BOOK A ROOM</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img className="second w-100" src={SecondImage} alt="Second slide" />
        <Carousel.Caption>
          <div className="index">
          <h3 id="txt1" >LUXURY LIVING</h3>
          <br />
          <h1 id="txt2">Discover A Brand </h1>
          <h1 id="txt2"> Luxurious Hotels</h1>
          
          <br />
          <button href=" " id="main">OUR ROOMS</button>
          <button  href=" " id="main1">BOOK A ROOM</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img className="third w-100" src={ThirdImage} alt="Third slide" />
        <Carousel.Caption>
          <div className="index">
          <h3 id="txt1">LUXURY LIVING</h3>
          <br />
          <h1 id="txt2">Discover A Brand </h1>
          <h1 id="txt2"> Luxurious Hotels</h1>
          <br />
          <button href=" " id="main">OUR ROOMS</button>
          <button  href=" " id="main1">BOOK A ROOM</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HeaderSlide;