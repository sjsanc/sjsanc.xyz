import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import theme from "../styles/theme";
import FeatherIcon from "feather-icons-react";

interface Link {
  link: string;
  name: string;
}

const links: Link[] = [
  { link: "https://github.com/sjsanc", name: "github" },
  { link: "https://www.linkedin.com/in/steven-scheepers-72b45b131/", name: "linkedin" },
  { link: "mailto:sjsanc@protonmail.com", name: "mail" },
];

export default function ContactPage() {
  return (
    <Layout>
      <Page>
        {links.map((li: Link, i) => (
          <a href={li.link} key={i}>
            <FeatherIcon icon={li.name} />
          </a>
        ))}
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

  svg {
    color: #e6e6e6;
    height: 120px;
    width: 120px;
    margin: 5px;
    padding: 25px;

    &:hover {
      background: #0000001c;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }
  }
`;
