import React, { useEffect, useState } from "react";
import LogoImage from "../images/logo.png";
import SEO from "./seo";
import "../styles/global.scss";
import { navigate } from "gatsby";
import Slideout from "./Slideout";

const pages = ["Bio", "Projects", "Writing", "Library", "Contact"];

const Layout = (props: { children? }) => {
  const [section, setSection] = useState<string>();

  useEffect(() => {
    let s = location.pathname.replace("/", "");
    setSection(s.charAt(0).toUpperCase() + s.slice(1));
  }, []);

  const changeSection = (evt) => {
    const section = evt.target.innerText.toLowerCase();
    const current = location.pathname.toLowerCase().replace("/", "");

    evt.preventDefault();
    if (section == current) {
      navigate("/");
    } else {
      navigate(`/${section}`);
    }
  };

  return (
    <>
      <header>
        <SEO />
      </header>
      <div className="container menu">
        <img src={LogoImage} alt="Portal key icon from Heroes of Newerth" id="logo" />
        <h1>SJSANC.</h1>
        <p>
          Welcome to my personal website, a digital homestead of sorts. Maybe you'll find something
          that interests you?
        </p>
        <div className="pages">
          {pages.map((btn, i) => (
            <a
              className={btn == section ? "pages--active" : ""}
              key={i}
              href={"/" + btn.toLowerCase()}
              onClick={changeSection}>
              {btn}
            </a>
          ))}
        </div>
      </div>
      {props.children ? <Slideout>{props.children}</Slideout> : null}
    </>
  );
};

export default Layout;
