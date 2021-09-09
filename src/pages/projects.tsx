import React from "react";
import Layout from "../components/Layout";
import TileGrid from "../components/TileGrid";
import styled from "styled-components";
import Tag from "../components/Tag";
import { graphql, useStaticQuery } from "gatsby";

interface ProjectInterface {
    name: string;
    desc: string;
    github?: string;
    website?: string;
    tags?: string[];
}

const query = graphql`
    query ProjectsQuery {
        allProjectsJson {
            edges {
                node {
                    name
                    desc
                    github
                    website
                    tags
                }
            }
        }
    }
`;

export default function ProjectsPage() {
    const projects: ProjectInterface[] = useStaticQuery(query)?.allProjectsJson.edges.map((x) => x.node);

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
                            <div>
                                {proj.tags.map((tag) => (
                                    <Tag text={tag} />
                                ))}
                            </div>
                            <p>{proj.desc}</p>
                            <div>
                                {proj.github && (
                                    <a target="_blank" href={proj.github}>
                                        Github
                                    </a>
                                )}
                                {proj.website && (
                                    <a target="_blank" href={proj.website}>
                                        Website
                                    </a>
                                )}
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
        grid-gap: 20px;
        margin-top: 30px;

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
