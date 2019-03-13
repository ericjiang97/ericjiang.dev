import React from 'react'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'

import ProfilePic from '../images/profile.png'

export default function Hero() {
  return (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        width: 100%;
        background: ${theme.brand.primary};
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
        <img
          src={ProfilePic}
          css={css`
            max-width: 150px;
            border-radius: 100%;
          `}
          alt="Eric"
        />
        <h1
          css={css`
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
            font-weight: 300;
          `}
        >
          <span role="img" aria-label="wave">
            👋
          </span>
          , Hi I'm Eric, I'm a final year IT student at Monash University and
          I'm currently building MonPlan.
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
