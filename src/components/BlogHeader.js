import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../config/theme'
import Container from './Container'

export default function BlogHeader() {
  return (
    <div
      css={css`
        background-color: ${theme.colors.gray};
      `}
    >
      <Container
        noVerticalPadding
        css={css`
          padding: 5px 20px;
        `}
      >
        <Link
          to="/blog"
          aria-label="about me"
          activeClassName="active"
          css={css`
            margin: 10px;
          `}
        >
          Blog Home
        </Link>
        <Link
          to="/tags"
          aria-label="about me"
          activeClassName="active"
          css={css`
            margin: 10px;
          `}
        >
          All tags
        </Link>
      </Container>
    </div>
  )
}
