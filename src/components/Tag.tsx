import React from "react";
import styled from "styled-components";

const colours = {
  games: "#92374D",
  typescript: "#8C5383",
  framework: "#559CAD",
  platform: "#4A5899",
};

export default function Tag(props: { name: string }) {
  return <StyledTag style={{ backgroundColor: colours[props.name] }}>{props.name}</StyledTag>;
}

const StyledTag = styled.div`
  display: inline;
  color: white;
  padding: 3px;
  font-size: 0.7em;
  font-family: monospace;
  border-radius: 3px;
  opacity: 0.8;
  margin: 2px 2px 2px 0;
`;
