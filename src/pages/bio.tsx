import React from "react";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Banner from "../images/personal.jpg";

export default function BioPage() {
  return (
    <Layout>
      <div className="bio">
        <div className="bio__media">
          <img src={Banner} id="banner" alt="Overlooking the mesetas" />
        </div>
        <label htmlFor="banner">Overlooking the mesetas</label>
        <p>
          I'm a software engineer living in the UK. I like making games, especially management
          simulator and strategy games. I also have a BA in Philosophy.
          <br />
          <br />
          As a hobby I like to write fiction, usually fantasy or sci-fi flavoured but not always.
        </p>
      </div>
    </Layout>
  );
}
