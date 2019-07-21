import React from "react"
// import PropTypes from 'prop-types'
import Img from "gatsby-image"

const ArenaBlock = ({
  item: { image, content_html, title, description_html },
  ...rest
}) => {
  console.log({ ...rest })
  return (
    <article>
      {image && (
        <div style={{ marginBottom: "0.5rem" }}>
          {image && <Img fluid={image.childImageSharp.fluid} />}
        </div>
      )}
      {content_html && (
        <div
          dangerouslySetInnerHTML={{ __html: content_html }}
          style={{ backgroundColor: "#222", color: "#fff", padding: "1rem" }}
        />
      )}
      {title && (
        <div>
          <span>{title}</span>
        </div>
      )}
      {description_html && (
        <div dangerouslySetInnerHTML={{ __html: description_html }} />
      )}
    </article>
  )
}

const ContentItem = ({ item }) => {
  if (item.__typename === "ArenaBlock") {
    return <ArenaBlock item={item} />
  }
  return null
}

// ContentItem.propTypes = {
//   item: PropTypes.object.isRequired,
// }

export default ContentItem
