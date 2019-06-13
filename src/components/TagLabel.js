import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'change-case'
import css from '@emotion/css'

function TagLabel({ children, to }) {
  return (
    <Link
      to={to || `/tags/${kebabCase(children)}/`}
      css={css`
        background-color: #ccc;
        padding: 10px;
        color: black;
        margin: 2px;
      `}
    >
      {children}
    </Link>
  )
}

export default TagLabel
