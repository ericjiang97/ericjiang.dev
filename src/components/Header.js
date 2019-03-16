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
}) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 15px 0 15px 0;
      background: ${dark ? '#090909' : `${bgColor}` || 'none'};
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
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
        <MediaQuery maxDeviceWidth={330}>
          <Link to="/" aria-label="go to homepage" activeClassName="active">
            <div
              css={css`
                display: flex;
                justify-content: center;
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
                {' '}
                Eric Jiang
              </span>
            </div>
          </Link>
        </MediaQuery>
        <MediaQuery minDeviceWidth={330}>
          <Link to="/" aria-label="go to homepage" activeClassName="active">
            {siteTitle}
          </Link>
          <Link to="/about" aria-label="about me" activeClassName="active">
            About
          </Link>
          <Link
            to="/projects"
            aria-label="about projects"
            activeClassName="active"
          >
            Projects
          </Link>
          <Link to="/talks" aria-label="about me" activeClassName="active">
            Talks
          </Link>
        </MediaQuery>
        <div
          css={css`
            font-size: 16px;
            line-height: 1.25;
            display: flex;
            align-items: center;
            a {
              color: ${dark ? '#fbfbfb' : 'rgba(0,0,0,0.85)'};
              text-decoration: none;
              & + a {
                margin-left: 32px;
              }
            }
            .active {
              display: none;
              visibility: hidden;
            }
          `}
        >
          <Link to="/blog" activeClassName="active" aria-label="View blog page">
            Blog
          </Link>
        </div>
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
