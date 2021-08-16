import * as React from "react";
import Layout from "../components/Layout";
import "../styles/global.scss";

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
  return <Layout></Layout>;
};

export default IndexPage;
