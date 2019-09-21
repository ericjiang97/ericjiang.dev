import React from 'react'
import css from '@emotion/css'

import { Link } from 'gatsby'

const Links = () => {
  return (
    <>
      <Link
        to="/blog"
        aria-label="about me"
        activeClassName="active"
        css={css`
          margin: 0.25rem;
          color: white;
          :hover {
            color: #ccc;
          }
        `}
      >
        Blog
      </Link>
    </>
  )
}

export default Links
