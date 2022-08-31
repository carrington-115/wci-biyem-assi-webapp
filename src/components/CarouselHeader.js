import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

// for the carousel n.b styled from styled components is also used here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  autoplay: true,
  arrows: true,
  fade: true,
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
          <div className="image-div">
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
              <h3 className="text-after">The Home of Signs and Wonders</h3>
            </Fade>
          </SlideText>
        </div>
        <div className="sunday-slide">
          <div className="image-div">
            <img src="/image-file/image 4.jpg" />
          </div>
          <ImageBackdrop />
          <ImageBackdrop2 />
          <SlideText>
            <Fade left>
              <h3>
                Join Us <br />
                Every Sunday
              </h3>
              <h3 className="text-after">
                For an Impactful Word <br /> Ministration
              </h3>
            </Fade>
          </SlideText>
        </div>
        <div className="chop">
          <div className="image-div">
            <img src="/image-file/image 3.jpg" />
          </div>
          <ImageBackdrop />
          <ImageBackdrop2 />
          <SlideText>
            <Fade left>
              <h3>
                Start Your Day <br />
                in God's Presence
              </h3>
              <h3 className="text-after">
                Attend the daily Covenant Hour of Prayers
                <br />
                from 6 - 7 AM
              </h3>
            </Fade>
          </SlideText>
        </div>
        <div className="wsf-meetings">
          <div className="image-div">
            <img src="/image-file/image 2.jpg" />
          </div>
          <ImageBackdrop />
          <ImageBackdrop2 />
          <SlideText>
            <Fade left>
              <h3>
                Attend our WSF
                <br />
                Meetings Every <br />
                Saturday
              </h3>
              <h3 className="wsf-text">
                Winners' Satelite Fellowship Prayer Meetings
              </h3>
            </Fade>
          </SlideText>
        </div>
        <div className="live-event">
          <div className="image-div">
            <img src="/image-file/image 5.jpg" />
          </div>
          <ImageBackdrop />
          <ImageBackdrop2 />
          <SlideText>
            <Fade left>
              <h3>
                Distance is <br />
                not a Barrier
              </h3>
              <h3 className="wsf-text">Join us Live on Youtube</h3>
              <YoutubeButton>
                <div className="youtube-image">
                  <img src="/image-file/youtube.png" />
                </div>
                <a href="https://www.youtube.com/channel/UCfIGIGxmYy0BaAJZw92wXGQ">
                  Join Us Now
                </a>
              </YoutubeButton>
            </Fade>
          </SlideText>
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
  .welcome,
  .sunday-slide,
  .wsf-meetings,
  .chop,
  .live-event {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 85vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .slick-dots {
    top: 80vh;
  }
  .slick-dots li button:before {
    font-size: 10px;
    color: white;
    opacity: 75%;
  }
  .slick-dots li.slick-active button:before {
    font-size: 20px;
    color: white;
    opacity: 90%;
  }
  .slick-prev,
  .slick-next {
    z-index: 8;
  }
  .slick-next {
    right: 20px;
  }
  .slick-prev {
    left: 20px;
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
  .text-after {
    font-size: 2.7em;
    font-weight: bold;
    font-family: arial;
    color: white;
  }
  .wsf-text {
    font-size: 2em;
  }
`;

const YoutubeButton = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  width: 35%;
  padding: 0 5px;
  margin-top: 15px;
  border-radius: 15px;

  a {
    text-decoration: none;
    margin-left: 8px;
    font-family: arial;
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: center;
  }
  .youtube-image {
    width: 50px;
    margin-left: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: rgb(255, 255, 255);
    a {
      color: red;
    }
  }
`;
