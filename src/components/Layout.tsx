import React, { useEffect, useState } from "react";
import LogoImage from "../images/logo.png";
import TileImage from "../images/tile-small.jpg";
import SEO from "./seo";
import "../styles/global.scss";
import { navigate } from "gatsby";
import Slideout from "./Slideout";
import { window } from "browser-monads";
import styled from "styled-components";
import theme from "../styles/theme";
import axios from "axios";
import { useStore } from "../hooks/useStore";

const pages = ["Projects", "Contact"];

const Layout = (props: { children? }) => {
  const [currentSection, setCurrentSection] = useState<string>();
  const [expanded, setExpanded] = useState<boolean>();
  // const { data, setData } = useStore();

  useEffect(() => {
    let s = window.location.pathname.replace("/", "");
    setCurrentSection(s.charAt(0).toUpperCase() + s.slice(1));
  }, []);

  useEffect(() => {
    currentSection !== "" ? setExpanded(true) : null;
  }, []);

  const changeSection = (evt) => {
    const section = evt.target.innerText.toLowerCase();
    const current = window.location.pathname.toLowerCase().replace("/", "");

    evt.preventDefault();
    if (section == current) {
      closeSection();
    } else {
      setExpanded(true);
      navigate(`/${section}`);
    }
  };

  const closeSection = (): void => {
    setExpanded(false);
    setTimeout(() => {
      navigate("/");
    }, 200);
  };

  return (
    <OuterWrapper id="outerWrapper">
      <header>
        <SEO />
      </header>
      <Menu locked={currentSection !== ""} id="menu">
        <Logo src={LogoImage} alt="Portal key icon from Heroes of Newerth" />
        <h1>SJSANC.</h1>
        <p>
          Hi -- welcome to my website. I'm a software engineer from the UK. I really like simulation
          games.
        </p>
        <Links className="pages">
          {pages.map((btn, i) => (
            <a
              className={btn == currentSection ? "activeLink" : ""}
              key={i}
              href={"/" + btn.toLowerCase()}
              onClick={changeSection}>
              {btn}
            </a>
          ))}
        </Links>
      </Menu>
      {props.children ? (
        <Slideout close={closeSection} expanded={expanded}>
          {props.children}
        </Slideout>
      ) : null}
      <Faded active={currentSection !== ""} id="fadedBackground" onClick={closeSection}></Faded>
      <Background
        style={{ backgroundImage: `url(${TileImage})` }}
        id="patternedBackground"></Background>
    </OuterWrapper>
  );
};

const Faded = styled.div<{ active: boolean }>`
  position: fixed;
  inset: 0 0 0 0;
  background: black;
  opacity: ${(props) => (props.active ? 0.5 : 0)};
  transition: 0.3s ease-in-out;
  pointer-events: ${(props) => (props.active ? "" : "none")};
`;

const Logo = styled.img`
  box-shadow: ${theme.boxShadow};
  border-radius: 50%;
  height: 64px;
  width: 64px;
  border: 5px solid white;
`;

const OuterWrapper = styled.div`
  height: 100vh;
  border: 15px solid ${theme.colors.dark};
  overflow-y: scroll;
`;

const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  position: fixed;
  inset: 0 0 0 0;
  background-repeat: repeat;
  background-size: 300px;
  opacity: 0.1;
  z-index: -1;
  pointer-events: none;
`;

const Menu = styled.div<{ locked: boolean }>`
  max-width: 400px;
  padding: 64px;
  overflow-y: ${(props) => (props.locked ? "hidden" : "auto")};

  @media screen and (max-width: 992px) {
    padding: 32px;
  }

  p,
  h1 {
    margin: 15px 0 15px 0;
  }

  p {
    background: ${theme.colors.dark};
    color: white;
    border-radius: 10px;
    border: 5px solid white;
    padding: 15px;
    box-shadow: ${theme.boxShadow};
  }

  p::selection {
    background: white;
    color: ${theme.colors.dark};
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    text-decoration: none;
    margin: 10px 0;
    position: relative;
    font-size: 25px;
    transition: 0.1s ease-in-out;
    color: ${theme.colors.dark};
    font-weight: 600;
  }
  .activeLink {
    &:before {
      height: 100% !important;
    }
  }
`;

export default Layout;
