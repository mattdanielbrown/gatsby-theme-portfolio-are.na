const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
    {
      resolve: "gatsby-source-are.na",
      options: {
        accessToken:
          "2db187bcb9fe61545222381128aba06a72dfcf73a62c291e835f8e344c1d3881",
        channelSlugs: ["gatsby-source-arena-portfolio"],
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src", "pages"),
      },
    },
  ],
}
