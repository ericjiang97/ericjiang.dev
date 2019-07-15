import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import MediaQuery from 'react-responsive'

import Layout from '../components/Layout'
import Container from 'components/Container'
import theme from '../../config/theme'
import SmallHero from '../components/SmallHero'
import Photo from '../components/Photo'

export default function Photos({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <MediaQuery minDeviceWidth={400}>
        <SmallHero />
      </MediaQuery>
      <Container
        css={css`
          padding-bottom: 0;
          background-color: #fff;
          margin-bottom: 10px;
        `}
      >
        <h1>Photos</h1>
        <p>
          One of the things I also enjoy outside of my studies and work is
          taking and editing photos
        </p>
        <p>
          <b>Current Photo Gear:</b>
          <ul>
            <li>Canon 800D DSLR</li>
            <li>18-55mm Kit Lens, 55-250mm Macro Lens</li>
            <li>Gobe CPL and UV Filters</li>
            <li>Skylum Luminar 3 for Photo Editing</li>
          </ul>
        </p>
        <h2>Downloads</h2>
        <Photo src="https://live.staticflickr.com/4842/31758320637_30b68e550d_k_d.jpg" />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
