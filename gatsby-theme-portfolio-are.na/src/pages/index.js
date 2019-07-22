/** @jsx jsx **/
import { jsx, Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"
import Img from "gatsby-image"
import Layout, { PageTitle, PageBody } from "../components/Layout"
import SEO from "../components/SEO"

export default function HomePage(props) {
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

  const { description } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="Home" description={description} />
      {description && <PageTitle title={description} />}
      <PageBody sx={{ display: "grid", gridAutoFlow: "row", gridGap: 5 }}>
        {data.arenaChannel.children
          .filter(item => item.__typename === "ArenaInnerChannel")
          .map((item, index) => {
            return (
              <article key={index}>
                {item.children.slice(0, 1).map((block, index) => (
                  <Link to={`/${item.slug}`} key={index}>
                    {block.image && (
                      <Img fluid={block.image.childImageSharp.fluid} />
                    )}
                  </Link>
                ))}
                <Styled.h3 sx={{ mb: 1 }}>
                  <Link
                    sx={{ color: "primary", textDecoration: "none" }}
                    to={`/${item.slug}`}
                  >
                    {item.title}
                  </Link>
                </Styled.h3>
                <Styled.p sx={{ mt: 0 }}>{item.metadata.description}</Styled.p>
              </article>
            )
          })}
      </PageBody>
    </Layout>
  )
}
