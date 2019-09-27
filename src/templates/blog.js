import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

// Components
import Container from 'components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Link from '../components/Link'
import BlogPost from '../components/Blog/BlogPost'
import FeaturedPost from '../components/Blog/FeaturedPost'

// Configuration
import theme from '../../config/theme'
import { lighten } from 'polished'

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
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          {posts.slice(0, 1).map(({ node: post }) => (
            <FeaturedPost post={post} />
          ))}
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            {posts.slice(1).map(({ node: post }) => (
              <BlogPost post={post} />
            ))}
          </div>
        </div>
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            {nextPagePath && (
              <Link
                to={nextPagePath}
                aria-label="View previous page"
                css={css`
                  background-color: ${lighten(0.5, theme.brand.primary)};
                  padding: 5px 10px;
                  border-radius: 5px;
                `}
              >
                ← Previous Page
              </Link>
            )}
          </div>
          {previousPagePath && (
            <Link
              to={previousPagePath}
              aria-label="View next page"
              css={css`
                background-color: ${lighten(0.5, theme.brand.primary)};
                padding: 5px 10px;
                border-radius: 5px;
              `}
            >
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
            date(formatString: "DD MMMM YYYY")
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
