/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "gatsby-theme-portfolio-are.na",
    titleTemplate: "%s — Gatsby Theme Portfolio Are.na",
    defaultTitle: "Gatsby Theme Portfolio Are.na",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jordanoverbye",

    indexTitle: "A Gatsby theme for creating a portfolio with are.na",
    indexDescription: "Are.na + Theme UI + MDX",
    description: "Gatsby + Are.na + Theme UI + MDX",

    social: [
      {
        name: "Github",
        url: "https://github.com",
      },

      {
        name: "Twitter",
        url: "https://twitter.com",
      },
      {
        name: "Are.na",
        url: "https://are.na",
      },
    ],
    navItems: [
      {
        name: "Contact",
        slug: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-are.na",
      options: {
        accessToken:
          "2db187bcb9fe61545222381128aba06a72dfcf73a62c291e835f8e344c1d3881",
        channelSlug: ["gatsby-source-arena-portfolio"],
      },
    },
  ],
}
