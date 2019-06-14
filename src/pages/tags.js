import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

// Utilities
import kebabCase from 'lodash/kebabCase'
import MediaQuery from 'react-responsive'

// Components
import Layout from '../components/Layout'
import SmallHero from '../components/SmallHero'

// Configuration
import theme from '../../config/theme'
import Container from '../components/Container'
import TagLabel from '../components/TagLabel'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site,
  },
}) => {
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
          background-color: #fff;
        `}
      >
        <h1>Tags</h1>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
          `}
        >
          {group.map(tag => (
            <TagLabel to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </TagLabel>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
