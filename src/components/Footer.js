import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import { Twitter, GitHub, LinkedIn, RssFeed } from './Social'
import Container from './Container'

const Footer = ({ author, noSubscribeForm }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
        >
          {author && `${author} \u00A9 ${new Date().getFullYear()}`}
        </div>
        <div>
          <RssFeed />
          <Twitter />
          <GitHub />
          <LinkedIn />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
