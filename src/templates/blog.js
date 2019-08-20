import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

// Components
import Container from 'components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Link from '../components/Link'
import BlogPost from '../components/BlogPost'

// Configuration
import theme from '../../config/theme'

const Blog = ({ data: { site, allMdx }, pageContext: { pagination } }) => {
  const { page, nextPagePath, previousPagePath } = pagination
  console.log(nextPagePath, previousPagePath)
  const posts = page
    .map(id =>
      allMdx.edges.find(
        edge =>
          edge.node.id === id &&
          edge.node.parent.sourceInstanceName !== 'pages',
      ),
    )
    .filter(post => post !== undefined)

  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.colors.blog_header}
      stickyHeader={true}
      showBlogHeader={true}
    >
      <SEO />
      <Container
        noVerticalPadding
        css={css`
          a,
          p {
          }
          h2 {
            a {
              color: inherit;
            }
          }
          small {
            display: block;
          }
        `}
      >
        {posts.map(({ node: post }) => (
          <BlogPost post={post} />
        ))}
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            {nextPagePath && (
              <Link to={nextPagePath} aria-label="View previous page">
                ← Previous Page
              </Link>
            )}
          </div>
          {previousPagePath && (
            <Link to={previousPagePath} aria-label="View next page">
              Next Page →
            </Link>
          )}
        </div>
        <hr
          css={css`
            margin: 50px 0;
          `}
        />
      </Container>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 300)
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
