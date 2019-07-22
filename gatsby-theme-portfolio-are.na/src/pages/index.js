/** @jsx jsx **/
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

import Layout, { PageTitle, PageBody } from "../components/Layout"
import SEO from "../components/SEO"
import ProjectsGrid from "../components/ProjectsGrid"

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
      <PageBody>
        <ProjectsGrid />
      </PageBody>
    </Layout>
  )
}
