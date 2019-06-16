import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

// Utilities
import kebabCase from 'lodash/kebabCase'
import MediaQuery from 'react-responsive'
import Fuse from 'fuse.js'

// Components
import Layout from '../components/Layout'
import SmallHero from '../components/SmallHero'

// Configuration
import theme from '../../config/theme'
import Container from '../components/Container'
import TagLabel from '../components/TagLabel'

class TagsPage extends React.Component {
  state = {
    searchString: '',
    results: [],
    tags: [],
  }

  componentDidMount() {
    const {
      data: {
        allMarkdownRemark: { group },
      },
    } = this.props
    const allTags = group.map(tag => {
      return {
        ...tag,
      }
    })
    this.setState({
      tags: allTags,
      results: allTags,
    })
  }

  handleChange = e => {
    if (e.target.value !== '') {
      const fuse = new Fuse(this.state.tags, {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['fieldValue'],
      })

      this.setState({
        searchString: e.target.value,
        results: fuse.search(e.target.value),
      })
    } else {
      this.setState({
        searchString: e.target.value,
        results: this.state.tags,
      })
    }
  }

  render() {
    const {
      data: { site },
    } = this.props

    const { results } = this.state
    return (
      <Layout
        site={site}
        headerColor={theme.colors.white}
        headerBg={theme.brand.primary}
        showBlogHeader={true}
      >
        <Container
          css={css`
            background-color: #fff;
          `}
        >
          <h1>Tags</h1>
          <div
            css={css`
              margin-top: 10px;
              margin-bottom: 10px;
            `}
          >
            <input
              type="text"
              name="name"
              value={this.state.searchString}
              onChange={this.handleChange}
              css={css`
                font-family: Inter UI Regular, sans-serif;
              `}
              placeholder="Search..."
            />
          </div>
          {results && (
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
              `}
            >
              {results.map((tag, i) => (
                <TagLabel to={`/tags/${kebabCase(tag.fieldValue)}/`} key={i}>
                  {tag.fieldValue} ({tag.totalCount})
                </TagLabel>
              ))}
            </div>
          )}
        </Container>
      </Layout>
    )
  }
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
