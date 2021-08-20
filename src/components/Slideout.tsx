import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { window } from "browser-monads";
import styled from "styled-components";

export default function Slideout(props: { children?; expanded: boolean; close: () => void }) {
  const [closing, setClosing] = useState<boolean>(false);

  // Slideout needs this internal state because windows
  // cannot be closed by scripts that originate from outside the window
  // Due to using navigate, we're in a different location
  const closeSection = () => {
    setClosing(true);
    setTimeout(() => {
      navigate("/");
    }, 200);
  };

  return (
    <StyledSlideout expanded={props.expanded && !closing} id="slideout">
      <Controls>
        <h2>{window.location.pathname.toUpperCase().replace("/", "")}</h2>
        <button onClick={closeSection}>CLOSE</button>
      </Controls>
      <Inner>{props.children}</Inner>
    </StyledSlideout>
  );
}

const StyledSlideout = styled.div`
  position: fixed;
  right: 0;
  width: 50vw;
  top: 0;
  transition: 0.2s ease-in-out;
  transform: ${(props) => (props.expanded ? "translateX(0vw)" : "translateX(50vw)")};
  z-index: 10;
  height: 90vh;
  border-top: 15px solid transparent;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;

  @media screen and (max-width: 567px) {
    width: 100vw;
    transform: ${(props) => (props.expanded ? "translateX(0vw)" : "translateX(100vw)")};
  }
`;

const Inner = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  border-bottom: 30px solid transparent;
`;

const Controls = styled.div`
  position: fixed;
  left: -200px;
  top: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: black;

  @media screen and (max-width: 992px) {
    left: 0;
    width: 100%;
    z-index: 10;
  }

  * {
    background: rgb(28, 28, 28);
    padding: 5px 12px;
    color: white;
    display: flex;
    align-items: center;
  }

  button {
    font-size: 24px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #e3e3e3;
      color: $text;
      transition: 0.3s ease-in-out;
    }
  }
`;
