import React, { useState } from "react";
import styled from "styled-components";
import Aside from "../Aside";
import HeaderBarCover from "../HeaderBarCover";
import Fade from "react-reveal/Fade";

function Aboutus() {
  return (
    <Container>
      <HeaderBarCover />
      <ImageCover>
        <div className="backdrop" />
        <img src="/image-file/about-cover.png" />
        <Fade left>
          <h1>
            THE MANDATE <br />
            <hr />
            "Now the Hour has Come to Liberate the World from all oppression of
            the devil through the preaching of the word of faith"
          </h1>
        </Fade>
      </ImageCover>
      <ContentBody>
        <div className="content-div">Test</div>
        <div className="aside-div">
          <Aside />
        </div>
      </ContentBody>
    </Container>
  );
}

export default Aboutus;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .content-div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .aside-div {
    width: calc(100%-80%);
  }
`;

const ImageCover = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100;
  }
  .backdrop {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  h1 {
    position: absolute;
    left: 1cm;
    bottom: 5cm;
    font-family: times new roman;
    font-size: 3em;
    width: 20cm;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    hr {
      margin: 0 2em;
    }
  }
`;
