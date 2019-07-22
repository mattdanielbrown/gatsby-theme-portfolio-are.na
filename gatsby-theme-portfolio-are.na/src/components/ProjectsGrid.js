/** @jsx jsx **/
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import ProjectsGridItem from "./ProjectsGridItem"

export default function ProjectsGrid() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
      arenaChannel(slug: { eq: "gatsby-source-arena-portfolio" }) {
        children {
          __typename
          ... on ArenaInnerChannel {
            title
            slug
            metadata {
              description
            }
            children {
              __typename
              ... on ArenaBlock {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 1280) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.arenaChannel.children.filter(
    item => item.__typename === "ArenaInnerChannel"
  )

  return (
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridColumnGap: 4,
        gridRowGap: 4,
      }}
    >
      {projects.map((item, index) => (
        <ProjectsGridItem item={item} key={index} />
      ))}
    </section>
  )
}
