import React from "react";
import "../styles/global.scss";
import Tile from "./Tile";
import ProjectJSON from "../content/projects.json";
import styled from "styled-components";

interface ProjectTile {
  name: string;
  picture: string;
  desc: string;
  links: Array<{ key: string; link: string }>;
  colors: { primary: string; secondary: string };
}

const getInitials = (str: string) => {
  const explode = str.split(" ");
  if (explode.length == 1) return explode[0][0].toUpperCase();
  else return [explode[0][0] + explode[1][0]].join("").toUpperCase();
};

export default function TileGrid() {
  return (
    <StyledGrid>
      {ProjectJSON.content.map((tile: ProjectTile, i) => (
        <Tile key={i} index={i} tile={tile} />
      ))}
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-auto-rows: 1fr;

  @media screen and (max-width: 567px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  }

  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1/1;
    grid-column: 1/1;
  }

  & > *:first-child {
    grid-row: 1/1;
    grid-column: 1/1;
  }
`;
