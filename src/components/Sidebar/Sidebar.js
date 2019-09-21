import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { lighten } from 'polished'

// Components
import Footer from '../Footer'

// Config
import theme from '../../../config/theme'

// Images
import ProfilePic from '../../images/profile.jpeg'
import Links from '../Header/Links'

const linkStyles = css({
  margin: 5,
  color: 'white',
  ':hover,:focus': {
    color: '#aaa',
  },
})

export default function Sidebar({ open = false }) {
  console.log(open)
  return (
    <div
      css={css`
        height: 100vh;
        flex: 1;
        padding: 18px 24px;
        color: ${theme.colors.white};
        background: linear-gradient(
          to top right,
          ${theme.brand.primary} 0%,
          ${lighten(0.2, theme.brand.primary)} 50%,
          ${lighten(0.3, theme.brand.primary)} 75%,
          ${lighten(0.4, theme.brand.primary)} 100%
        );
        align-items: center;
        flex-direction: column;
        width: 280px;
        text-align: center;
        display: flex;
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 200;
        transform: ${open ? 'translateX(0px)' : 'translateX(-100%)'};
        transition: all 0.3s;
      `}
    >
      <div
        css={css`
          flex: 1;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <img
            src={ProfilePic}
            css={css`
              max-width: 50px;
              border-radius: 100%;
              margin: 0px;
              margin-right: 0.75rem;
            `}
            alt="Eric"
          />
          <div
            css={css`
              text-align: left;
            `}
          >
            <h3
              css={css`
                color: ${theme.colors.white};
                font-weight: 300;
                margin: 0px;
                margin-top: 0.25rem;
                margin-bottom: 0.25rem;
              `}
            >
              Eric Jiang
            </h3>
            <h4
              css={css`
                color: ${theme.colors.white};
                font-weight: 300;
                margin: 0px;
                margin-top: 0.25rem;
                margin-bottom: 0.25rem;
              `}
            >
              Software Engineer, Monash University
            </h4>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex: 1;
          flex-direction: column;
        `}
      >
        <Link
          to="/"
          aria-label="home"
          activeClassName="active"
          css={linkStyles}
        >
          Home
        </Link>
        <Links />
      </div>

      <Footer />
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
