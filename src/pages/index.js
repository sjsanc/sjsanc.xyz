import * as React from "react";
import "../styles/global.scss";
import { StaticImage } from "gatsby-plugin-image";
import LogoImage from "../images/logo.png";

const projects = [
    {
        name: "An Imperial Simulation",
        description: "A strategy game about empires.",
        link: "https://github.com/sjsanc/an-imperial-simulation"
    },
    {
        name: "Mnemonist",
        description: "A guided platform for learning languages",
        link: ""
    },
    {
        name: "AloeCMS",
        description: "A simple, detail-oriented CMS",
        link: ""
    }
];

const IndexPage = () => {
    return (
        <div class="container">
            <title>Home Page</title>
            <header>
                <img src={LogoImage} id="logo" />
                <h1>SJSANC.</h1>
                <h2>UK-based software engineer.</h2>
                <h3>
                    <em>"People are fleeting; open source contributions are eternal."</em>
                </h3>
                <ul class="socials">
                    <li>
                        <a href="https://github.com/sjsanc">Github</a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/steven-scheepers-72b45b131">Linkedin</a>
                    </li>
                </ul>
            </header>
            <main>
                <div>
                    <h2>Projects</h2>
                    <div class="projects">
                        {projects.map(proj => (
                            <a class="project" href={proj.link}>
                                <h3>{proj.name}</h3>
                                <p>{proj.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default IndexPage;
