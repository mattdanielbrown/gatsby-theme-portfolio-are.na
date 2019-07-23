/** @jsx jsx **/
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"
import Layout, { PageTitle, PageBody } from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import ProjectsGrid from "../components/ProjectsGrid"

export default function ProjectTemplate(props) {
  const {
    title,
    metadata: { description },
    children,
  } = props.data.arenaInnerChannel
  return (
    <Layout>
      <SEO title={title} description={description} />
      <PageTitle title={title} description={description} />
      <PageBody>
        <section sx={{ display: "grid", gridAutoFlow: "row", gridGap: 4 }}>
          {children
            .filter(item => item.__typename === "ArenaBlock")
            .map((item, index) => {
              return (
                <div className="margin-bottom-s" key={index}>
                  <Img fluid={item.image.childImageSharp.fluid} />
                </div>
              )
            })}
        </section>
        <section sx={{ py: 5 }}>
          <Styled.h3 sx={{ fontSize: 5 }}>All projects</Styled.h3>
          <ProjectsGrid />
        </section>
      </PageBody>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    arenaInnerChannel(slug: { eq: $slug }) {
      title
      metadata {
        description
      }
      children {
        __typename
        ... on ArenaBlock {
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
`
