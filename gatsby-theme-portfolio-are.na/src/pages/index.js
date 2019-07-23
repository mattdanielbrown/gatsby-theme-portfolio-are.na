/** @jsx jsx **/
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProjectsGrid from "../components/ProjectsGrid"
import PageTitle from "../components/PageTitle"

export default function HomePage(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  const { description } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="Home" description={description} />
      {description && <PageTitle title={description} />}
      <ProjectsGrid />
    </Layout>
  )
}
