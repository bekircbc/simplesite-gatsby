import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  const links = [
    {
      text: "Welcome",
      url: "/",
      badge: false,
      description: "This is the welcome page",
    },
    {
      text: "Info",
      url: "/info",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
    {
      text: "Books",
      url: "/books",
      badge: false,
      description:
        "A simple example of linking to books page and getting books from API",
    },
  ]

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        subtitle={data.site.siteMetadata?.subtitle || `Subtitle`}
      />
      <nav>
        {links.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== link.length - 1 && <> </>}
          </React.Fragment>
        ))}
      </nav>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
