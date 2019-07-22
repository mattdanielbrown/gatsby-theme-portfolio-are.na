/** @jsx jsx **/
import { jsx } from "theme-ui"
import { Global } from "@emotion/core"
import { Layout as StyledLayout, Main, Footer, Container } from "theme-ui"
import { useSpring, animated } from "react-spring"

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

export function PageTitle(props) {
  const animatedProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
  })
  return (
    <animated.div
      style={animatedProps}
      {...props}
      sx={{ maxWidth: "66%", py: 5 }}
    />
  )
}

export function PageBody(props) {
  const animatedProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 100,
  })
  return <animated.div style={animatedProps} {...props} />
}
