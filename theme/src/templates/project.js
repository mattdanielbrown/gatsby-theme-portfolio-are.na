/** @jsx jsx **/
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function ProjectTemplate(props) {
  const {
    title,
    metadata: { description },
    children,
  } = props.data.arenaInnerChannel
  return (
    <Layout>
      <Styled.h1>{title}</Styled.h1>
      <Styled.p>{description}</Styled.p>
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
