import React from 'react'
import { css } from '@emotion/core'
import MediaQuery from 'react-responsive'

// COMPONENTS
import Layout from '../components/Layout'
import SmallHero from '../components/SmallHero'

// CONFIG
import theme from '../../config/theme'

// Images
import LostImage from '../images/lost.svg'

export default ({ data: { site } }) => (
  <div>
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <MediaQuery minDeviceWidth={340}>
        <SmallHero />
      </MediaQuery>
      <div
        css={css`
          padding: 2em;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <img
          src={LostImage}
          width="80%"
          css={css`
            max-width: 450px;
          `}
        />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </div>
    </Layout>
  </div>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
