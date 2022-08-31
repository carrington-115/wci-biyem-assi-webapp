import React from "react";
import styled from "styled-components";
import CarouselHeader from "../CarouselHeader";

function Home() {
  return (
    <Container>
      <CarouselHeader />
      <ContentBody>
        <HomeMainBody />
      </ContentBody>
    </Container>
  );
}

function HomeMainBody() {
  return (
    <div>
      Main Body
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xNRJwmlRBNU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Home;

const Container = styled.div``;
const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
