import React from 'react'
import css from '@emotion/css'

import { Link } from 'gatsby'

const LinkStyles = css`
  margin: 0.25rem;
  color: white;
  :hover {
    color: #ccc;
  }
`
const Links = () => {
  return (
    <div>
      <Link
        to="/blog"
        aria-label="about me"
        activeClassName="active"
        css={LinkStyles}
      >
        Blog
      </Link>
      <Link
        to="/photos"
        aria-label="about me"
        activeClassName="active"
        css={LinkStyles}
      >
        Photos
      </Link>
    </div>
  )
}

export default Links
