module.exports = {
  siteMetadata: {
    title: "sjsanc.xyz",
    titleTemplate: "%s · Zug Zug",
    description: "Personal site of sjsanc",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: "gatsby-plugin-layout",
    //   options: {
    //     component: require.resolve(`./components/Layout`),
    //   },
    // },
  ],
};
