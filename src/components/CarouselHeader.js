import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

// for the carousel n.b styled from styled components is also used here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderComponent from "./HeaderComponent";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: false,
};
function CarouselHeader() {
  return (
    <div>
      <CarouselElement />
    </div>
  );
}

function CarouselElement() {
  return (
    <CarouselContainermain>
      <CarouselContainer {...settings}>
        <div className="welcome">
          <div>
            <img src="/image-file/image 1.jpg" />
          </div>
          <ImageBackdrop />
          <ImageBackdrop2 />
          <SlideText>
            <Fade left>
              <h3>
                Welcome To <br />
                Winners' Chapel <br />
                Biyem-Assi
              </h3>
            </Fade>
          </SlideText>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </CarouselContainer>
    </CarouselContainermain>
  );
}

export default CarouselHeader;

const CarouselContainer = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .welcome {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 80vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const CarouselContainermain = styled.div``;

const ImageBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  background-image: linear-gradient(
    to right,
    rgba(211, 176, 150, 0.4),
    rgba(211, 176, 150, 0.2),
    rgba(211, 176, 150, 0.1)
  );
`;
const ImageBackdrop2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.4);
`;

const SlideText = styled.div`
  position: absolute;
  z-index: 10;
  top: 20vh;
  left: 10%;
  h3 {
    font-size: 6em;
    font-weight: bold;
    font-family: arial;
    color: white;
  }
`;
