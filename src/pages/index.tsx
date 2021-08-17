import * as React from "react";
import Layout from "../components/Layout";
import "../styles/global.scss";

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
