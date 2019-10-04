import React from 'react'
import { graphql } from 'gatsby'
import css from '@emotion/css'
import Layout from '../components/Layout'
import theme from '../../config/theme'
import { lighten } from 'polished'
import Container from '../components/Container'

const Photos = ({ data: { site } }) => {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <div
        css={css`
          flex: 1;
          display: flex;
        `}
      >
        <Container
          css={css`
            padding-bottom: 0;
            color: white;
            @media (min-width: 481px) and (max-width: 1365px) {
              margin-left: 100px;
            }
            display: flex;
            flex-direction: column;
            h1 {
              color: ${lighten(0.7, theme.brand.primary)};
            }
            h2 {
              color: ${lighten(0.6, theme.brand.primary)};
            }
          `}
        >
          <h1>Wallpapers</h1>
          <span>Coming Soon!</span>
        </Container>
      </div>
    </Layout>
  )
}

export default Photos

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
