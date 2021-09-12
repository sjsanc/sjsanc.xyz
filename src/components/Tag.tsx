import React from "react";
import styled from "styled-components";

const colors = {
  typescript: "#B3D5FA",
  game: "#dfbb39",
  demo: "#FCAC9C",
  framework: "#d4a6d4",
  website: "#22a275",
};

export default function Tag(props: { text: string }) {
  return <StyledDiv style={{ background: colors[`${props.text}`] }}>{props.text}</StyledDiv>;
}

const StyledDiv = styled.div`
  display: inline;
  padding: 2px 4px;
  border-radius: 3px;
  color: white;
  font-family: monospace;
  font-size: 9px;
`;
