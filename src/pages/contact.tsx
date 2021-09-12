import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import FeatherIcon from "feather-icons-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import monokai from "react-syntax-highlighter/dist/esm/styles/hljs/monokai";

const links: Link[] = [
  { link: "https://github.com/sjsanc", name: "github" },
  { link: "https://www.linkedin.com/in/steven-scheepers-72b45b131/", name: "linkedin" },
  // { link: "mailto:sjsanc@protonmail.com", name: "mail" },
];

export default function ContactPage() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleReveal = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(evt.target);
    setToggle(true);
  };

  return (
    <Layout>
      <Page>
        {links.map((li: Link, i) => (
          <a href={li.link} key={i}>
            <FeatherIcon icon={li.name} />
          </a>
        ))}
        <a onClick={handleReveal}>
          {!toggle ? (
            <FeatherIcon icon="mail" />
          ) : (
            <div className="emailBlock">
              <span style={{ color: "#f92672" }}>λ </span>{" "}
              <span style={{ color: "#fd971f" }}>~</span> echo{" "}
              <span style={{ color: "#a6e22e" }}>'0x4anc@pm.me' </span>| tr{" "}
              <span style={{ color: "#a6e22e" }}>'0x4' 'sjs'</span>
            </div>
          )}
        </a>
      </Page>
    </Layout>
  );
}

const Page = styled.div`
  background: ${theme.colors.dark};
  width: 100%;
  min-height: 100%;
  border: 15px solid #0000001c;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    height: 130px;
    width: 130px;
    margin-bottom: 10px;
  }

  svg {
    color: #e6e6e6;
    height: 130px;
    width: 130px;
    padding: 25px;

    &:hover {
      background: #0000001c;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }
  }

  .emailBlock {
    height: 100%;
    width: 100%;
    background: #0000001c;
    border-radius: 10px;
    color: white;
    font-family: "JetBrains", monospace;
    font-size: 13px;
    padding: 9px;
  }
`;
