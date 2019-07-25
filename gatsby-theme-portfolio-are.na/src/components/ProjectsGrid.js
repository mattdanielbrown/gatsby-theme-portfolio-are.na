/** @jsx jsx **/
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

import ProjectsGridItem from './ProjectsGridItem'

export default function ProjectsGrid() {
  const data = useStaticQuery(graphql`
    query {
      allArenaChannel {
        edges {
          node {
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
                        fluid(maxWidth: 800, maxHeight: 500) {
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
      }
    }
  `)

  const projects = data.allArenaChannel.edges[0].node.children.filter(
    item => item.__typename === 'ArenaInnerChannel'
  )

  return (
    <section
      sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', 'repeat(2, 1fr)'],
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
