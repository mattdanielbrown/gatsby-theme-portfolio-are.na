import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

export default function SEO({ title, description }) {
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
    <Helmet>
      <title>
        {[title, data.site.siteMetadata.title].filter(Boolean).join(' — ')}
      </title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  )
}
