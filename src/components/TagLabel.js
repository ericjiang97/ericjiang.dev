import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'change-case'
import css from '@emotion/css'
import theme from '../../config/theme'
import { lighten } from 'polished'

function TagLabel({ children, to }) {
  return (
    <Link
      to={to || `/tags/${kebabCase(children)}/`}
      css={css({
        backgroundColor: lighten(0.2, theme.brand.primary),
        padding: '6px 12px',
        borderRadius: 4,
        color: theme.colors.white,
        margin: 2,
        fontSize: '0.75em',
        ':hover,:focus': {
          color: theme.colors.primary_light,
        },
      })}
    >
      {children}
    </Link>
  )
}

export default TagLabel
