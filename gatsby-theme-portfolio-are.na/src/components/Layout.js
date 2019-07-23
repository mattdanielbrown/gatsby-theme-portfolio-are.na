/** @jsx jsx **/
import { jsx, Styled, Main, Container } from "theme-ui"
import { Global } from "@emotion/core"
import { useSpring, animated } from "react-spring"

import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"

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
    </Styled.root>
  )
}

export function PageTitle({ title, description, ...rest }) {
  const animatedProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
  })
  return (
    <animated.div
      style={animatedProps}
      {...rest}
      sx={{ maxWidth: "50%", py: 5 }}
    >
      {title && <Styled.h1 sx={{ m: 0 }}>{title}</Styled.h1>}
      {description && <Styled.p sx={{ fontSize: 3 }}>{description}</Styled.p>}
    </animated.div>
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
