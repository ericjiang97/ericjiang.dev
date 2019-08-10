import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Container from 'components/Container'
import theme from '../../config/theme'

import PhotoGallery from '../components/PhotoGallery'

export default function Photos({ data: { site, allFlickrPhoto } }) {
  const photos = allFlickrPhoto.edges.map(edge => {
    return {
      src: edge.node.url_n,
      original: edge.node.url_c,
      thumbnail: edge.node.url_n,
      full: edge.node.url_o,
      title: edge.node.title,
      description: edge.node.description,
      flickr_photo_id: edge.node.photo_id,
    }
  })
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
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
        <PhotoGallery photos={photos} />
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
    allFlickrPhoto(sort: { fields: [datetaken], order: DESC }) {
      edges {
        node {
          id
          title
          datetaken
          description
          tags
          url_c
          url_n
          url_o
          photo_id
        }
      }
    }
  }
`
