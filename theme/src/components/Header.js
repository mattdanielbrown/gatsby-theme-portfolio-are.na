/** @jsx jsx **/
import { Header as ThemedHeader, useColorMode, jsx } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import Button from "./Button"

const modes = ["light", "dark"]

export default function Header() {
  const [mode, setMode] = useColorMode()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
    <ThemedHeader css={{ display: "flex", justifyContent: "space-between" }}>
      <Link to="/" sx={{ textDecoration: "none", color: "text" }}>
        {data.site.siteMetadata.title}
      </Link>
      <div>
        <Button onClick={cycleMode}>{mode}</Button>
      </div>
    </ThemedHeader>
  )
}
