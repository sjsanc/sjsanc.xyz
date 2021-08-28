import React from "react";
import Layout from "../components/Layout";
import TileGrid from "../components/TileGrid";
import styled from "styled-components";

interface ProjectInterface {
  name: string;
  desc: string;
  github?: string;
  website?: string;
}

import ProjectJSON from "../content/projects.json";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          name
          desc
          github
          website
        }
      }
    }
  }
`;

export default function ProjectsPage() {
  const projects: ProjectInterface[] = useStaticQuery(query)?.allProjectsJson.edges.map(
    (x) => x.node
  );

  return (
    <Layout>
      <Projects>
        <h1>Projects</h1>
        <p>Here's a collection of stuff I'm working on:</p>
        <div className="projectList">
          {projects.map((proj: ProjectInterface, i) => (
            <div className="project" key={i}>
              <span>
                <h3>{proj.name}</h3>
              </span>
              <p>{proj.desc}</p>
              <div>
                {proj.github && <a href={proj.github}>Github</a>}
                {proj.website && <a href={proj.website}>Website</a>}
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
