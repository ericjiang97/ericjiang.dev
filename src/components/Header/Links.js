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
        `}
      >
        Blog
      </Link>
      <Link
        to="/talks"
        aria-label="about me"
        activeClassName="active"
        css={css`
          margin: 0.25rem;
          color: white;
        `}
      >
        Talks
      </Link>
    </>
  )
}

export default Links
