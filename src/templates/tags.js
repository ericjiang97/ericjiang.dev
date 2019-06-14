import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Link, graphql } from 'gatsby'

// Components
import Layout from '../components/Layout'
import Container from '../components/Container'
import BlogPost from '../components/BlogPost'

// Configuration
import theme from '../../config/theme'

const Tags = ({ pageContext, data }) => {
  console.log(pageContext, data)
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout
      site={data.site}
      headerColor={theme.colors.white}
      headerBg={theme.colors.blog_header}
      stickyHeader={true}
    >
      <Container
        css={css`
          background-color: #fff;
        `}
      >
        <h1
          css={css`
            text-align: center;
          `}
        >
          {tagHeader}
        </h1>
      </Container>
      <Container
        css={css`
          background-color: #fff;
        `}
      >
        {edges.map(({ node: post }) => {
          return <BlogPost post={post} />
        })}

        <Link
          to="/tags"
          aria-label="Visit blog page"
          css={css({
            borderRadius: 4,
            padding: '12px 12px',
            background: theme.brand.primary,
            color: theme.colors.white,
            ':hover': {
              color: theme.colors.primary_light,
            },
          })}
        >
          View all tags
        </Link>
      </Container>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      ...site
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
