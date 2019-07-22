import React from "react"
import { Global } from "@emotion/core"
import { Layout as StyledLayout, Main, Footer, Container } from "theme-ui"
import Header from "./Header"
import SEO from "./SEO"

export default function Layout({ children, pageContext }) {
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
      {pageContext && pageContext.frontmatter && (
        <SEO {...pageContext.frontmatter} />
      )}
      <Container>
        <Header />
        <Main>{children}</Main>
        <Footer>Hello</Footer>
      </Container>
    </StyledLayout>
  )
}
