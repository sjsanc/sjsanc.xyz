import React from "react";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Banner from "../images/personal.jpg";

export default function BioPage() {
  return (
    <Layout>
      <div className="bio">
        <img className="bio__media" src={Banner} id="banner" alt="Overlooking the mesetas" />
        <p>
          I'm a software engineer living in the UK. I like building management simulators, and
          writing software to help with learning.
          <br />
          <br />
          As a hobby I like to write fiction, usually fantasy or sci-fi flavoured but not always.
        </p>
      </div>
    </Layout>
  );
}
