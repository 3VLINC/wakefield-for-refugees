import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wakefield For Refugees`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      "resolve": "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `poppins\:100,200,400`
        ],
        display: 'swap'
      }
    }
  ]
};

export default config;
