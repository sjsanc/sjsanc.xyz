import * as React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import "../styles/global.scss";
import LogoImage from "../images/logo.png";
import SEO from "../components/seo";

const projects = [
  {
    name: "An Imperial Simulation",
    description: "A strategy game about empires.",
    link: "https://github.com/sjsanc/an-imperial-simulation",
  },
  {
    name: "Mnemonist",
    description: "A guided platform for learning languages",
    link: "",
  },
  {
    name: "AloeCMS",
    description: "A simple, detail-oriented CMS",
    link: "",
  },
];

const otherstuff = [
  {
    name: "Risuto",
    description: "An early playaround with CoinGecko's API",
    link: "https://github.com/sjsanc/risuto-crypto",
  },
  {
    name: "osticket-ticketwidget",
    description: "A simple tracker userscript for osTicket",
    link: "https://github.com/sjsanc/osticket-ticketwidget",
  },
];

const quotes = [
  "People are fleeting; open source contributions are eternal.",
  "Judah family bun her, she's dirt on a real ting G",
  "All the best portfolios feature arbitrary, randomly-selected quotes",
  "Zug Zug",
];

const randomiser = (array) => {
  return array[~~Math.random() * array.length];
};

const IndexPage = () => {
  return (
    <div class="container">
      <title>Home Page</title>
      <header>
        <Helmet>
          <script src={withPrefix("scripts.js")} type="text/javascript" />
        </Helmet>
        <SEO />
        <img src={LogoImage} alt="Portal key icon from Heroes of Newerth" id="logo" />
        <h1>SJSANC.</h1>
        <h2>UK-based software developer.</h2>
        <h3>
          <em>"{randomiser(quotes)}"</em>
        </h3>
        <ul class="socials">
          <li>
            <a href="https://github.com/sjsanc">Github</a>
          </li>
          <li>
            <a href="https://gist.github.com/sjsanc">Gist</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/steven-scheepers-72b45b131">Linkedin</a>
          </li>
        </ul>
      </header>
      <main>
        <h2>Projects</h2>
        <div class="projects">
          {projects.map((proj) => (
            <a class="project" href={proj.link}>
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
            </a>
          ))}
        </div>
        <h2>Other Stuff</h2>
        <div class="projects">
          {otherstuff.map((proj) => (
            <a class="project" href={proj.link}>
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
