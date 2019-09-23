import React from 'react'

import { css } from '@emotion/core'
import Container from 'components/Container'

import { rhythm } from '../lib/typography'
import theme from '../../config/theme'
import { lighten, darken } from 'polished'
import ProfilePic from '../images/profile.jpeg'

export default function Hero() {
  return (
    <section
      css={css`
        width: 100%;
        background-position: 0% 25%;
        padding: 20px 0 30px 0;
        display: flex;
        height: 60vh;
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
          <div
            css={css`
              flex: 1;
              @media (max-width: 650px) {
                display: none;
              }
            `}
          >
            <img
              src={ProfilePic}
              css={css`
                width: 100%;
                border-radius: 100%;
                margin: 0px;
              `}
              alt="Eric"
            />
          </div>
          <div
            css={css`
              flex: 4;
              @media (min-width: 650px) {
                margin-left: 2rem;
                display: none;
              }
            `}
          >
            <p
              css={css`
                color: white;
                position: relative;
                z-index: 5;
                line-height: 1.5;
                margin: 0;
                max-width: ${rhythm(50)};
                font-weight: 300;
                color: ${lighten(0.45, theme.brand.primary)};
                font-size: 0.85rem;
              `}
            >
              G'day, I am
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
                font-size: 3rem;
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
                color: ${lighten(0.55, theme.brand.primary)};
                font-size: 1.25rem;
              `}
            >
              I'm a Software Engineer at Monash University.
            </p>

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
              I make impact to everyone by delivering awesome software solutions
              and I love building the communities around me.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
