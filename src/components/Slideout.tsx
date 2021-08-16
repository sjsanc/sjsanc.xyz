import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";

export default function Slideout(props: { children? }) {
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    setExpanded(true);
  }, []);

  const closeSection = () => {
    setExpanded(false);
    setTimeout(() => {
      navigate("/");
    }, 200);
  };

  return (
    <div className={`slideout ${expanded ? "slideout--expanded" : ""}`}>
      <div className="slideout__controls">
        <h2>{location.pathname.toUpperCase().replace("/", "")}</h2>
        <button onClick={closeSection}>CLOSE</button>
      </div>
      <div className="slideout__inner">{props.children}</div>
    </div>
  );
}
