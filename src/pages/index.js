import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

// Components
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'

// Config
import theme from '../../config/theme'

import BlogPost from '../components/BlogPost'

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
      showHero={true}
    >
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <div
          css={css`
            text-align: center;
          `}
        >
          <h2>Latest Blog Posts</h2>
        </div>
        <div style={{ marginBottom: 30 }}>
          {allMdx.edges.map(({ node: post }) => (
            <>
              <BlogPost post={post} />
            </>
          ))}
        </div>

        <Link
          to="/blog"
          aria-label="Visit blog page"
          css={css({
            borderRadius: 4,
            padding: '12px 12px',
            margin: 12,
            background: theme.brand.primary,
            color: theme.colors.white,
            ':hover': {
              color: theme.colors.primary_light,
            },
          })}
        >
          View all articles
        </Link>
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
          excerpt(pruneLength: 150)
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
            date(formatString: "ddd DD MMMM YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            slug
            keywords
            tags
          }
        }
      }
    }
  }
`
