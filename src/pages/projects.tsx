import React from "react";
import Layout from "../components/Layout";
import TileGrid from "../components/TileGrid";
import styled from "styled-components";

interface ProjectTile {
  name: string;
  picture: string;
  desc: string;
  links: Array<{ key: string; link: string }>;
  colors: { primary: string; secondary: string };
}

import ProjectJSON from "../content/projects.json";

export default function ProjectsPage() {
  return (
    <Layout>
      {/* <TileGrid /> */}
      <Projects>
        <h1>Projects</h1>
        <p>Here's a collection of stuff I'm working on:</p>
        <div className="projectList">
          {ProjectJSON.content.map((project: ProjectTile, i) => (
            <div className="project" key={i}>
              <span>
                <h3>{project.name}</h3>
              </span>
              <p>{project.desc}</p>
              <div>
                {project.links.map((li, i) => (
                  <a key={i} href={li.link}>
                    {li.key}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Projects>
    </Layout>
  );
}

const Projects = styled.div`
  background: #fefff0;
  width: 100%;
  min-height: 100%;
  border: 15px solid #73793f1c;
  padding: 55px;

  @media screen and (max-width: 567px) {
    padding: 20px;
  }

  .projectList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    margin-top: 30px;

    @media screen and (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  .project {
    > div {
      padding-top: 8px;
    }
  }

  a {
    margin-right: 15px;
  }

  p {
    margin-top: 8px;
  }

  p,
  a {
    font-family: "Roboto Condensed", sans-serf;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
