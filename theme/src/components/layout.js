import React from "react"
import { Global } from "@emotion/core"
import { Layout as StyledLayout, Main, Container } from "theme-ui"
import Header from "./Header"

export default function Layout({ children }) {
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
        <Header />
        <Main>{children}</Main>
      </Container>
    </StyledLayout>
  )
}
