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
          <HomeMainBody />
        </div>
        <div className="aside-div">
          <Aside />
        </div>
      </ContentBody>
    </Container>
  );
}

function HomeMainBody() {
  return (
    <MainContainerContent>
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

export default Home;

const Container = styled.div``;
const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  width: 100%;
  .content-div {
    width: 90%;
    display: flex;
    justify-content: center;
  }
  iframe {
    padding: 0;
    margin: 0;
  }
  .aside-div {
    width: calc(100%-90%);
  }
`;

const MainContainerContent = styled.div`
  .invitation-container {
    background-color: white;
    width: 20cm;
    height: 12cm;
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
    margin-bottom: 20px;
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
`;

const StoreLink = styled(Link)`
  font-family: times new roman;
  text-decoration: none;
  color: red;
`;
