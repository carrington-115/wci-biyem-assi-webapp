import React from "react";
import styled from "styled-components";
import Aside from "../Aside";
import CarouselHeader from "../CarouselHeader";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <CarouselHeader />
      <ContentBody>
        <div className="content-div">
          <InvitationContent />
          <AboutSection />
        </div>
        <div className="aside-div">
          <Aside />
        </div>
      </ContentBody>
    </Container>
  );
}

function InvitationContent() {
  return (
    <MainContainerContent>
      {/* <div className="the-mandate">
        <h1>
          Now the Hour has Come to Liberate the World <br />
          from all oppression of the devil <br />
          through the preaching of the word of faith
        </h1>
      </div> */}
      <Fade bottom>
        <div className="invitation-container">
          <h1>
            Check All Our Weekly <StoreLink to="programs">Programs</StoreLink>
          </h1>
          <h2 className="invitation-main">
            Attend Our Covenant Hour of Prayers
            <br />
            <h2 className="time">Everyday from 6-7:00 am</h2>
          </h2>

          <h2 className="invitation-main">
            Attend Our Weekly Communion Service
            <br />
            <h2 className="time">Every Wednesday from 5-7:00 pm</h2>
          </h2>

          <h2 className="invitation-main sunday">
            Join Us Every Sunday
            <br />
            <h2 className="service-hours">
              <h2>
                First Service
                <br /> 7-9:15am
              </h2>
              <h2>
                Second Service
                <br /> 9:15-11:15am
              </h2>
            </h2>
          </h2>
          <AllPrograms to="programs">All Our Programs</AllPrograms>
        </div>
      </Fade>
      <div className="video-content-update">
        <h1>
          Check All Our Recorded Programs on the{" "}
          <StoreLink to="store">Store</StoreLink>
        </h1>
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/Ee6qNwX_1gM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </MainContainerContent>
  );
}
function AboutSection() {
  return (
    <AboutContainer>
      <h1>Want to know about us?</h1>
      <div className="bishop-abt-div"></div>
      <div className="wci-abt-div"></div>
      <div className="mandate-div"></div>
    </AboutContainer>
  );
}

export default Home;

const Container = styled.div``;
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
  iframe {
    padding: 0;
    margin: 0;
  }
  .aside-div {
    width: calc(100%-80%);
  }
`;

const MainContainerContent = styled.div`
  padding-top: 30px;
  background-color: rgba(211, 176, 150, 0.3);
  width: 32cm;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .invitation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 20cm;
    height: 15cm;
    border-radius: 10px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
    h1 {
      text-align: center;
      padding: 5px 10px;
      color: white;
      font-family: times new roman;
      background-color: rgb(240, 195, 60);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 19.5cm;
    }
    h2 {
      font-family: times new roman;
      text-align: center;
      font-size: 35px;
      padding: 10px;

      .time {
        font-weight: bold;
        font-size: 30px;
        padding: 0;
      }
    }
    .invitation-main {
      margin-top: 20px;
    }
    .invitation-main.sunday {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .service-hours {
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 25px;
        margin: 0;
        padding: 0;
        margin: 0 15px;
      }
    }
  }
  .video-content-update {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 2.5cm;
    iframe {
      box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    h1 {
      text-align: center;
      padding: 5px 1.95cm;
      color: white;
      font-family: times new roman;
      background-color: rgb(240, 195, 60);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  .the-mandate {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      text-align: center;
      font-family: ;
    }
  }
`;

const StoreLink = styled(Link)`
  font-family: times new roman;
  text-decoration: none;
  color: black;
  &:hover {
    color: blue;
  }
`;

const AllPrograms = styled(Link)`
  margin: 10px 0 2.5cm 0;
  background-color: rgb(240, 195, 60);
  color: white;
  text-decoration: none;
  font-size: 1.6em;
  font-family: times new roman;
  padding: 0.5cm 0.8cm;
  font-weight: bold;
  border-radius: 20px;
  &:hover {
    background-color: rgb(220, 190, 60);
  }
`;

const AboutContainer = styled(MainContainerContent)`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 0;
  padding-top: 0;
  h1 {
    background-color: rgba(252, 3, 3, 0.7);
    color: white;
    margin-top: 0;
    text-align: center;
    width: 100%;
  }
`;
