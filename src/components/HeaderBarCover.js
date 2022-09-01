import React, { useState } from "react";
import styled from "styled-components";

function HeaderBarCover() {
  const [showBar, setShowBar] = useState(false);
  const showHeaderBar = () => {
    if (window.scrollY <= 200) {
      setShowBar(true);
    }
  };
  return <HeaderBar />;
}

export default HeaderBarCover;

const HeaderBar = styled.div`
  top: 0;
  right: 0;
  left: 0;
  height: 120px;
  background-color: rgb(240, 195, 60);
`;
