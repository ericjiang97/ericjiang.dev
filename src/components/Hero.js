import React from 'react'

import { css } from '@emotion/core'
import Container from 'components/Container'

import { rhythm } from '../lib/typography'
import theme from '../../config/theme'
import { lighten, darken } from 'polished'

export default function Hero() {
  return (
    <section
      css={css`
        width: 100%;
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
        <div
          css={css`
            display: flex;
          `}
        >
          <div>
            <p
              css={css`
                color: white;
                position: relative;
                z-index: 5;
                line-height: 1.5;
                margin: 0;
                max-width: ${rhythm(20)};
                font-weight: 300;
                color: ${lighten(0.45, theme.brand.primary)};
                font-size: 0.85rem;
              `}
            >
              <span role="img" aria-label="wave">
                👋
              </span>
              &nbsp; Hi, I'm
            </p>
            <h1
              css={css`
                color: ${lighten(0.65, theme.brand.primary)};
                position: relative;
                z-index: 5;
                line-height: 1.5;
                margin: 0;
                max-width: ${rhythm(20)};
                font-weight: 500;
              `}
            >
              Eric Jiang.
            </h1>
            <p
              css={css`
                color: white;
                position: relative;
                z-index: 5;
                line-height: 1.5;
                margin: 0;
                max-width: ${rhythm(20)};
                font-weight: 300;
                color: ${darken(0.25, '#ffffff')};
                font-size: 0.85rem;
              `}
            >
              And I make impact by delivering awesome software solutions
            </p>
          </div>
        </div>
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
