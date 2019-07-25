/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "gatsby-theme-portfolio-are.na",
    indexTitle: "A Gatsby theme for creating a portfolio with are.na",
    indexDescription: "Gatsby + Are.na + Theme UI + MDX",
    image: "/social.png", // path in static folder
    twitterUsername: "@jordanoverbye",
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
        accessToken: process.env.ARENA_ACCESS_TOKEN,
        channelSlug: ["gatsby-source-arena-portfolio"],
      },
    },
  ],
}
