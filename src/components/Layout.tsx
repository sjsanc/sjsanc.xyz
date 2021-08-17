import React, { useEffect, useState } from "react";
import LogoImage from "../images/logo.png";
import TileImage from "../images/tile.jpg";
import SEO from "./seo";
import "../styles/global.scss";
import { navigate } from "gatsby";
import Slideout from "./Slideout";
import { window } from "browser-monads";
import styled from "styled-components";

const pages = ["Bio", "Projects", "Writing", "Library", "Contact"];

const Layout = (props: { children? }) => {
  const [section, setSection] = useState<string>();

  useEffect(() => {
    let s = window.location.pathname.replace("/", "");
    setSection(s.charAt(0).toUpperCase() + s.slice(1));
    console.log(window);
  }, []);

  const changeSection = (evt) => {
    const section = evt.target.innerText.toLowerCase();
    const current = window.location.pathname.toLowerCase().replace("/", "");

    evt.preventDefault();
    if (section == current) {
      navigate("/");
    } else {
      navigate(`/${section}`);
    }
  };

  return (
    <OuterWrapper>
      <header>
        <SEO />
      </header>
      <Menu className="container menu">
        <img src={LogoImage} alt="Portal key icon from Heroes of Newerth" id="logo" />
        <h1>SJSANC.</h1>
        <p>
          Welcome to my personal website, a digital homestead of sorts. Maybe you'll find something
          that interests you?
        </p>
        <Links className="pages">
          {pages.map((btn, i) => (
            <a
              className={btn == section ? "activeLink" : ""}
              key={i}
              href={"/" + btn.toLowerCase()}
              onClick={changeSection}>
              {btn}
            </a>
          ))}
        </Links>
      </Menu>
      {props.children ? <Slideout>{props.children}</Slideout> : null}
      <Background style={{ backgroundImage: `url(${TileImage})` }}></Background>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  height: 100vh;
  border: 15px solid rgb(28, 28, 28);
`;

const Background = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-repeat: repeat;
  background-size: 300px;
  opacity: 0.1;
  pointer-events: none;
`;

const Menu = styled.div`
  max-width: 400px;
  p,
  h1 {
    margin: 15px 0 15px 0;
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    text-decoration: none;
    margin: 10px 0;
    padding: 5px 8px;
    position: relative;
    font-size: 25px;
    transition: 0.1s ease-in-out;
    color: white;
    font-weight: 500;

    &:before,
    &:after {
      content: "";
      display: inline-block;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      transition: 0.3s ease-in-out;
      mix-blend-mode: difference;
    }

    &:before {
      height: 0;
      background: white;
    }

    &:after {
      height: 100%;
      background: rgb(28, 28, 28);
    }

    &:hover {
      text-decoration: none;

      &:before {
        height: 100%;
      }
    }
  }
  .activeLink {
    &:before {
      height: 100% !important;
    }
  }
`;

export default Layout;
