import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import MediaQuery from 'react-responsive'

import theme from '../../config/theme'
import ProfilePic from '../images/profile.png'

import Container from './Container'

const Header = ({
  dark,
  bgColor = 'none',
  siteTitle,
  headerColor = 'black',
  sticky = false,
}) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 15px 0 15px 0;
      background: ${dark ? '#090909' : `${bgColor}` || 'none'};
      position: ${sticky ? 'fixed' : 'inherit'};
      top: ${sticky ? 0 : 'inherit'};
      z-index: ${sticky ? 9 : 'inherit'};
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          color: ${headerColor};
          a {
            color: ${headerColor ? headerColor : theme.colors.body_color};
          }
          a:hover {
            color: ${headerColor === theme.colors.white
              ? 'white'
              : theme.colors.link_color_hover};
          }
        `}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
          <Link to="/" aria-label="go to homepage" activeClassName="active">
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <img
                src={ProfilePic}
                css={css`
                  max-width: 30px;
                  max-height: 30px;
                  border-radius: 100%;
                  margin: 0px;
                `}
                alt="Eric"
              />
              <span
                css={css`
                  margin-left: 5px;
                `}
              >
                {siteTitle}
              </span>
            </div>
          </Link>
        </div>
        <Link
          to="/blog"
          aria-label="about me"
          activeClassName="active"
          css={css`
            margin: 5px;
          `}
        >
          Blog
        </Link>
        <Link
          to="/about"
          aria-label="about me"
          activeClassName="active"
          css={css`
            margin: 5px;
          `}
        >
          About
        </Link>
        <MediaQuery minDeviceWidth={330}>
          <Link
            to="/projects"
            aria-label="about projects"
            activeClassName="active"
            css={css`
              margin: 5px;
            `}
          >
            Projects
          </Link>
          <Link
            to="/talks"
            aria-label="about me"
            activeClassName="active"
            css={css`
              margin: 5px;
            `}
          >
            Talks
          </Link>
        </MediaQuery>
      </nav>
    </Container>
  </header>
)

export default Header

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
