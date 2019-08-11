import React from 'react'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'

export default function Hero() {
  return (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        width: 100%;
        background: url('./images/magic.svg');
        background-repeat: none;
        background-size: cover;
        background-position: 0% 25%;
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(20)};
            font-weight: 300;
          `}
        >
          <span role="img" aria-label="wave">
            👋
          </span>
          , Hi I'm Eric. I make impact by delivering awesome software solutions
        </h1>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}
