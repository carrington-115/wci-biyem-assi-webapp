import React from "react";
import styled from "styled-components";
import HeaderBarCover from "../HeaderBarCover";
import Fade from "react-reveal/Fade";
import Aside from "../Aside";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <Container>
      <HeaderBarCover />
      <ImageCover>
        <div className="backdrop" />
        <img src="/image-file/programs-cover.jpg" />
        <Fade left>
          <h1>
            Matt. 6:33 <br />
            <hr />
            "But Seek ye first the Kingdom of God, and his righteousness and all
            these things shall be added unto you"
          </h1>
        </Fade>
      </ImageCover>
      <ContentBody>
        <div className="content-div">
          <ProgramsCard
            title="Join Us every Sunday"
            imgLink="/image-file/programs/sunday.png"
            programTime="First Service: 7:00-9:15 am Second Service: 9:15-11:15 am"
            description="Attend our services on sundays. You can attend on ground or 
            you can attend online. At Winners' Chapel Biyem-Assi, distance is not a barrier"
          />
        </div>
        <div className="aside-div">
          <Aside />
        </div>
      </ContentBody>
    </Container>
  );
}

function ProgramsCard(props) {
  return (
    <Fade bottom>
      <CardContainer>
        <div className="image">
          <img src={props.imgLink} alt={props.altText} />
        </div>
        <div className="card-title">
          <h1>{props.title}</h1>
        </div>
        <div className="time">
          <h1>{props.programTime}</h1>
        </div>
        <div className="card-description">
          <h1>{props.description}</h1>
        </div>
      </CardContainer>
    </Fade>
  );
}
export default Programs;

const Container = styled.div``;

const ImageCover = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const ContentBody = styled.div`
  display: flex;
  width: 100%;
  .content-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(211, 176, 150, 0.15);
    overflow: hidden;
  }
  .aside-div {
    width: calc(100%-80%);
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-text: center;
  margin-top: 1.5cm;
  background-color: white;
  border-radius: 20px;
  .image {
    width: 18cm;
    height: 10cm;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
  .card-title {
    display: flex;
    justify-content: center;
    background-color: rgba(211, 176, 150, 1);
    h1 {
      align-text: center;
      color: white;
      font-family: times new roman;
      font-size: 3em;
    }
  }
  h1 {
    align-text: center;
    font-weight: normal;
  }
  .time,
  .card-description {
    display: flex;
    justify-content: center;
    width: 16cm;
    font-family: times new roman;
    h1 {
      align-text: center;
      font-weight: normal;
    }
  }
`;

const LinkButton = styled(Link)``;
