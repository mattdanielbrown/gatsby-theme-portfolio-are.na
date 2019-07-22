/** @jsx jsx **/
import { jsx, Footer as ThemedFooter, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials
        }
      }
    }
  `)

  return (
    <ThemedFooter
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: 4,
        mt: 4,
      }}
    >
      <ul
        sx={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "grid",
          gridAutoFlow: "column",
          gridGap: 3,
        }}
      >
        {data.site.siteMetadata.socials.map(social => (
          <li key={social}>
            <Styled.a href="#">{social}</Styled.a>
          </li>
        ))}
      </ul>
    </ThemedFooter>
  )
}
