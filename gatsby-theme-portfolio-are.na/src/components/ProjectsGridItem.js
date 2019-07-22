/** @jsx jsx **/
import { jsx, Styled } from "theme-ui"
import Link from "gatsby-link"
import Img from "gatsby-image"

export default function ProjectsGridItem({ item }) {
  return (
    <article>
      {item.children.slice(0, 1).map((block, index) => (
        <Link to={`/${item.slug}`} key={index}>
          {block.image && <Img fluid={block.image.childImageSharp.fluid} />}
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
}
