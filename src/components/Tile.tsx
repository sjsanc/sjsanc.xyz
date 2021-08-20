import React, { useState } from "react";
import styled from "styled-components";

export interface TileProps {
  name: string;
  picture?: string;
  desc?: string;
  links?: Array<{ key: string; link: string }>;
  colors?: { primary: string; secondary: string };
}

export default function Tile(props: { tile: TileProps; index: number }) {
  const { tile } = props;

  return (
    <StyledTile
      key={props.index}
      style={{ backgroundColor: tile.colors.primary, color: tile.colors.secondary }}>
      <h2>{tile.name}</h2>
      <p>{tile.desc}</p>
      <div>
        {tile.links.map((li, i) => {
          <a key={i} href={li.link}>
            {li.key}
          </a>;
        })}
      </div>
      <TileView></TileView>
    </StyledTile>
  );
}

const StyledTile = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  box-shadow: inset 1em 0em rgba(0, 0, 0, 0.096), inset -1em 0em rgba(0, 0, 0, 0.096),
    inset 0em 1em rgba(0, 0, 0, 0.096), inset 0em -1em rgba(0, 0, 0, 0.096);

  a {
    padding: 5px;
  }

  * {
    color: inherit;
  }

  p,
  h2 {
    text-align: center;
  }

  @media screen and (max-width: 567px) {
    font-size: 0.7rem;
    padding: 15px;
  }

  &:not(:first-of-type) {
    &:hover {
      &:before {
        content: "";
        position: absolute;
        inset: 0 0 0 0;
        background: rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }
  }
`;

const TileView = styled.div``;
