import React from 'react'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'

import ProfilePic from '../images/profile.png'

export default function SmallHero() {
  return (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        width: 100%;
        background: ${theme.brand.primary};
        padding: 10px 0 10px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        <img
          src={ProfilePic}
          css={css`
            max-width: 75px;
            max-height: 75px;
            border-radius: 100%;
          `}
          alt="Eric"
        />
        <h4
          css={css`
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
            font-weight: 300;
            margin-left: 20px;
          `}
        >
          <span role="img" aria-label="wave">
            👋
          </span>
          , Hi I'm Eric, I'm a final year IT student at Monash University and
          I'm currently building MonPlan.
        </h4>
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
