import React from "react";
import styled from "styled-components";

function Aside() {
  return (
    <AsideContainer>
      <h1>
        WELCOME TO <br /> WINNERS' CHAPEL <br /> BIYEM-ASSI
      </h1>
    </AsideContainer>
  );
}

export default Aside;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
