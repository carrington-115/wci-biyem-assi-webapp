import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HeaderComponent() {
  const [headerIsShowing, setHeaderIsShowing] = useState(false);
  function headerChangeOnScrolling() {
    if (window.scrollY >= 80) {
      setHeaderIsShowing(true);
    } else {
      setHeaderIsShowing(false);
    }
  }
  window.addEventListener("scroll", headerChangeOnScrolling);
  return (
    <NavContainer showHeader={headerIsShowing}>
      <PageLink to="/">
        <NavLogo showHeader={headerIsShowing}>
          <img
            src="/image-file/logo.svg"
            alt="winners-chapel-international-log"
          />
        </NavLogo>
      </PageLink>

      <NavPages>
        <PageLink showHeader={headerIsShowing} className="page-text" to="/">
          Home
        </PageLink>
        <PageLink
          showHeader={headerIsShowing}
          className="page-text"
          to="about-us"
        >
          About us
        </PageLink>
        <PageLink
          showHeader={headerIsShowing}
          className="page-text"
          to="programs"
        >
          Programs
        </PageLink>
        <PageLink showHeader={headerIsShowing} className="page-text" to="store">
          Store
        </PageLink>
        <PageLink
          showHeader={headerIsShowing}
          className="page-text"
          to="announcements"
        >
          Announcements
        </PageLink>
        <PageLink
          showHeader={headerIsShowing}
          className="page-text"
          to="contact-us"
        >
          Contact
        </PageLink>
      </NavPages>
      <SearchBar showHeader={headerIsShowing}>
        <input type="text" placeholder="Search" />
      </SearchBar>
    </NavContainer>
  );
}

export default HeaderComponent;

const NavContainer = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  heigth: 150px;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.showHeader ? "rgb(240, 195, 60)" : "transparent"};
  box-shadow: ${(props) =>
    props.showHeader ? "0px 2px 3px rgba(0, 0, 0, 0.5)" : "none"};
`;
const NavLogo = styled.div`
  transition: all 0.5s 250ms cubic-bezier(0.53, 0.51, 0.61, 0.63);
  width: ${(props) => (props.showHeader ? "75px" : "100px")};
  height: ${(props) => (props.showHeader ? "75px" : "100px")};
  padding: 10px 0px;
  margin-left: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const NavPages = styled.nav`
  display: flex;
  align-items: center;
`;
const PageLink = styled(Link)`
  text-decoration: none;
  margin: 0 18px;
  font-family: arial;
  font-weight: bold;
  color: white;
  font-size: ${(props) => (props.showHeader ? "20px" : "25px")};
  transition: all 0.5s 250ms cubic-bezier(0.53, 0.51, 0.61, 0.63);
  &:hover {
    color: ${(props) => (props.showHeader ? "black" : "rgb(240, 195, 60)")};
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: ${(props) => (props.showHeader ? "flex-end" : "none")};
  margin-left: ${(props) => (props.showHeader ? "40px" : "none")};
  flex: flex-end;
  input {
    background-color: rgba(0, 0, 0, 0);
    width: 7cm;
    height: 0.9cm;
    border: 3px solid ${(props) => (props.showHeader ? "black" : "white")};
    border-radius: 20px;
    padding-left: 20px;
    font-size: 25px;
    color: ${(props) => (props.showHeader ? "black" : "white")};
    ::placeholder {
      color: ${(props) => (props.showHeader ? "black" : "white")};
    }
  }
`;
