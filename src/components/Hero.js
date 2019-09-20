import React from 'react'
import { css } from '@emotion/core'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'
// Images
import ProfilePic from '../images/profile.jpeg'

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
          <div
            css={css`
              margin-right: 10px;
            `}
          >
            <img
              src={ProfilePic}
              css={css`
                height: 150px;
                border-radius: 100%;
              `}
            />
          </div>
          <div>
            <h2
              css={css`
                color: white;
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
              &nbsp; Hi, I'm
            </h2>
            <h1
              css={css`
                color: white;
                position: relative;
                z-index: 5;
                line-height: 1.5;
                margin: 0;
                max-width: ${rhythm(20)};
                font-weight: 300;
              `}
            >
              Eric Jiang
            </h1>
            <h3
              css={css`
                color: white;
                position: relative;
                z-index: 5;
                line-height: 1.5;
                margin: 0;
                max-width: ${rhythm(20)};
                font-weight: 300;
              `}
            >
              And I make impact by delivering awesome software solutions
            </h3>
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
