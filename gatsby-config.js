module.exports = {
  siteMetadata: {
    title: "sjsanc.xyz",
    titleTemplate: "%s · Zug Zug",
    description: "Personal site for sjsanc",
    url: "http://www.sjsanc.xyz", // No trailing slash allowed!
    image: "/logo.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
