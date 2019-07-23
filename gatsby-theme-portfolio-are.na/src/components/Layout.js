/** @jsx jsx **/
import { jsx, Styled, Main, Container } from "theme-ui"
import { Global } from "@emotion/core"

import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"
import AnimatedContent from "./AnimatedContent"
import PageTitle from "./PageTitle"

export default function Layout({ children, pageContext }) {
  return (
    <Styled.root>
      <Global
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Header />
      <AnimatedContent>
        <Main>
          <Container sx={{ py: 0 }}>
            {pageContext && pageContext.frontmatter && (
              <div>
                <PageTitle title={pageContext.frontmatter.title} />
                <SEO {...pageContext.frontmatter} />
              </div>
            )}
            {children}
          </Container>
        </Main>
        <Footer sx={{ py: 5 }}>Hello</Footer>
      </AnimatedContent>
    </Styled.root>
  )
}
