import React from 'react'
import MediaQuery from 'react-responsive'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { lighten } from 'polished'

// Components
import Footer from '../components/Footer'

// Config
import theme from '../../config/theme'

// Images
import ProfilePic from '../images/profile.png'

const linkStyles = css({
  margin: 5,
  color: 'white',
  ':hover,:focus': {
    color: '#aaa',
  },
})

export default function Sidebar() {
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
        min-width: 330px;
        text-align: center;
        display: flex;
        @media screen and (min-width: 0px) and (max-width: 500px) {
          display: none;
        }
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
      <MediaQuery minDeviceWidth={330}>
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
          <Link
            to="/blog"
            aria-label="about me"
            activeClassName="active"
            css={linkStyles}
          >
            Blog
          </Link>
          <Link
            to="/about"
            aria-label="about me"
            activeClassName="active"
            css={linkStyles}
          >
            About
          </Link>
          <Link
            to="/projects"
            aria-label="about projects"
            activeClassName="active"
            css={linkStyles}
          >
            Projects
          </Link>
          <Link
            to="/talks"
            aria-label="about me"
            activeClassName="active"
            css={linkStyles}
          >
            Talks
          </Link>
        </div>
      </MediaQuery>

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
