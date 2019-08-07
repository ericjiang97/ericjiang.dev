import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import theme from '../../config/theme'

// Images
import ProfilePic from '../images/profile.png'
import { Twitter, RssFeed, GitHub, LinkedIn } from './Social'

export default function Sidebar() {
  return (
    <div
      css={css`
        height: 100vh;
        flex: 1;
        padding: 10px 24px;
        background-color: ${theme.brand.primary};
        color: ${theme.colors.white};
        display: flex;
        align-items: center;
        flex-direction: column;
        min-width: 300px;
        text-align: center;
      `}
    >
      <div
        css={css`
          flex: 1;
        `}
      >
        <img
          src={ProfilePic}
          css={css`
            max-width: 150px;
            border-radius: 100%;
          `}
          alt="Eric"
        />
        <h2
          css={css`
            color: ${theme.colors.white};
            font-weight: 300;
          `}
        >
          Eric Jiang
        </h2>
        <h3
          css={css`
            color: ${theme.colors.white};
            font-weight: 300;
          `}
        >
          Software Engineer, Monash University
        </h3>
      </div>

      <div>
        <RssFeed color={theme.colors.white} />
        <Twitter color={theme.colors.white} />
        <GitHub color={theme.colors.white} />
        <LinkedIn color={theme.colors.white} />
      </div>
      <div>Copyright &copy; Eric Jiang {new Date().getFullYear()}</div>
    </div>
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
