import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import { Twitter, GitHub, LinkedIn, RssFeed } from './Social'
import Container from './Container'
import theme from '../../config/theme'

const Footer = ({ author, noSubscribeForm }) => (
  <footer>
    <div
      css={css`
        max-width: 100vw;
        background-color: ${theme.brand.primary};
        color: ${theme.colors.white};
      `}
    >
      <Container
        css={css`
          padding-top: 15px;
          ${bpMaxSM} {
            padding-top: 15px;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            flex-wrap: wrap;
          `}
        >
          <div
            css={css`
              font-size: 90%;
              opacity: 0.7;
              display: flex;
            `}
          >
            {author &&
              `Copyright \u00A9 ${author}  ${new Date().getFullYear()}`}
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <span
              css={css`
                font-size: 90%;
                opacity: 0.7;
                display: flex;
              `}
            >
              Follow me on:
            </span>
            <hr
              css={css`
                font-size: 90%;
                opacity: 0.7;
                display: flex;
                margin: 0px 0px 10px 0px;
              `}
            />
            <div>
              <RssFeed color={theme.colors.white} />
              <Twitter color={theme.colors.white} />
              <GitHub color={theme.colors.white} />
              <LinkedIn color={theme.colors.white} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  </footer>
)

export default Footer
