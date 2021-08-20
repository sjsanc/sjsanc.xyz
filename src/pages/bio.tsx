import React from "react";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Banner from "../images/personal.jpg";

export default function BioPage() {
  return (
    <Layout>
      <div className="bio">
        <img className="bio__media" src={Banner} id="banner" alt="Overlooking the mesetas" />
        <p></p>
      </div>
    </Layout>
  );
}
