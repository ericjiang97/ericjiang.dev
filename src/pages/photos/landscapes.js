import React from 'react'
import { graphql } from 'gatsby'
import css from '@emotion/css'
import { lighten } from 'polished'

import Layout from '../../components/Layout'
import Container from '../../components/Container'
import theme from '../../../config/theme'

import LandscapePhotosContainer from '../../containers/LandscapePhotosContainer'

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
            flex: 1;
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
            a {
              color: white;
              border: 1px solid #fff;
              padding: 0.25rem 0.5rem;
              display: inline-block;
              margin-top: 1rem;
              border-radius: 0.5rem;
              :hover {
                color: ${lighten(0.2, theme.brand.primary)};
                border: ${lighten(0.7, theme.brand.primary)};
                background-color: ${lighten(0.7, theme.brand.primary)};
              }
            }
          `}
        >
          <h1>Photos - Landscapes</h1>
          <LandscapePhotosContainer />
          <div>
            <a href="https://www.flickr.com/photos/lorderikir/albums/72157711187396608/with/48841351486/">
              View Collection on Flickr
            </a>
          </div>
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
