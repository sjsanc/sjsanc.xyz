import React, { useState, forwardRef } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Tag from "../components/Tag";
import { graphql, useStaticQuery } from "gatsby";
import FlipMove from "react-flip-move";
import { findKey, intersects } from "../utils/utils";

const query = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          projects {
            name
            desc
            github
            website
            tags
          }
          categories
        }
      }
    }
  }
`;

export default function ProjectsPage() {
  const data = useStaticQuery(query);
  const projects = findKey(data, "projects");
  const categories = findKey(data, "categories");

  // filters which project tiles show up
  const [filter, setFilter] = useState<string[]>(categories);

  const toggleFilter = (evt: React.MouseEvent<HTMLSpanElement>) => {
    const value = evt.currentTarget.id;
    const tag = evt.currentTarget;

    if (tag.classList.contains("deselectedFilter")) {
      tag.classList.remove("deselectedFilter");
      setFilter([...filter, value]);
    } else {
      tag.classList.add("deselectedFilter");
      setFilter(filter.filter((x) => x !== value));
    }
  };

  const ProjectItem = forwardRef((props: { proj: ProjectInterface }, ref) => (
    <div className="project">
      <div ref={ref}>
        <span>
          <h3>{props.proj.name}</h3>
        </span>
        <div className="filterList">
          {props.proj.tags.map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </div>
        <p>{props.proj.desc}</p>
        <div>
          {props.proj.github && (
            <a target="_blank" href={props.proj.github}>
              Github
            </a>
          )}
          {props.proj.website && (
            <a target="_blank" href={props.proj.website}>
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <Layout>
      <Projects>
        <h1>Projects</h1>
        <p>
          Here's a collection of stuff I've made or am making. I mostly build things with Typescript
          + React.
        </p>
        <div className="filterList clickableFilter">
          <p>Click to filter: </p>
          {categories.map((c) => (
            <div key={c} id={c} onClick={toggleFilter}>
              <Tag text={c} />
            </div>
          ))}
        </div>
        <FlipMove className="projectList">
          {projects
            .filter((p) => (p ? intersects(p.tags, filter) : null))
            .sort((p) => p.name)
            .map((proj: ProjectInterface, i) => (
              <ProjectItem proj={proj} key={i} />
            ))}
        </FlipMove>
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
  position: relative;

  @media screen and (max-width: 567px) {
    padding: 20px;
  }

  > * {
    margin-bottom: 8px;
  }

  .deselectedFilter {
    > div {
      opacity: 0.3;
    }
  }

  .filterList {
    display: flex;
    align-items: center;
    margin: 5px 0;

    > * {
      margin-right: 5px;
    }
  }

  .clickableFilter {
    div {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }

  .projectList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-top: 20px;

    @media screen and (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  .project > * {
    margin-bottom: 5px;
  }

  a {
    margin-right: 15px;
  }

  p,
  a {
    font-family: "Roboto Condensed", sans-serf;
  }
`;
