import React from "react";
import "../styles/global.scss";

import ProjectJSON from "../content/projects.json";

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

export default function ProjectTiles() {
  return (
    <div className="tilegrid">
      {ProjectJSON.content.map((tile: ProjectTile) => (
        <div
          className="tile"
          style={{ backgroundColor: tile.colors.primary, color: tile.colors.secondary }}>
          <h2>{tile.name}</h2>
          <p>{tile.desc}</p>
          <div>
            {tile.links.map((li) => (
              <a href={li.link}>{li.key}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
