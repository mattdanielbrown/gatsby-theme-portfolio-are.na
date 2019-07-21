import React from "react"
import { Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Container>
        <Header>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </Header>
        <Main>{children}</Main>
      </Container>
    </StyledLayout>
  )
}
