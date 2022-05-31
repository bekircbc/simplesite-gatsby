import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle, subtitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      color: "#465c69",
      fontSize: "2.5rem",
      fontWeight: "bold",
    }}
  >
    {subtitle}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
