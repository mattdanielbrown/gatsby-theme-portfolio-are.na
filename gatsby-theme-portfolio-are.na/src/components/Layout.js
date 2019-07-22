/** @jsx jsx **/
import { jsx, Styled, Root, Main, Footer, Container } from "theme-ui"
import { Global } from "@emotion/core"
import { useSpring, animated } from "react-spring"

import Header from "./Header"
import SEO from "./SEO"

console.log(Root)

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
      {pageContext && pageContext.frontmatter && (
        <SEO {...pageContext.frontmatter} />
      )}
      <Container>
        <Header />
        <Main>{children}</Main>
        <Footer sx={{ py: 5 }}>Hello</Footer>
      </Container>
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
      sx={{ maxWidth: "66%", py: 5 }}
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
