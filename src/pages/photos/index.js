import React from 'react'
import { graphql } from 'gatsby'
import css from '@emotion/css'
import { lighten } from 'polished'

import Layout from '../../components/Layout'
import Container from '../../components/Container'
import theme from '../../../config/theme'
import landscapePhotos from '../../containers/LandscapePhotosContainer/photos'

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
              display: inline-block;
              margin-top: 1rem;
              :hover {
                color: ${lighten(0.2, theme.brand.primary)};
              }
            }
          `}
        >
          <h1>Photos</h1>
          <div>
            <a href="/photos/landscapes">
              <div
                css={css`
                  width: 280px;
                  height: 300px;
                  background-image: url(${landscapePhotos[0].src});
                  background-repeat: no-repeat;
                  background-size: cover;
                  display: flex;
                  flex-direction: column;
                  padding: 0.75rem;
                  :hover {
                    background-image: url(${landscapePhotos[0].src}),
                      linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
                  }
                  h2 {
                    margin-top: 0.25rem;
                    color: white;
                  }
                `}
              >
                <h2>Landscapes Collection</h2>
              </div>
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
