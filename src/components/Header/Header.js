import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import MediaQuery from 'react-responsive'

import theme from '../../../config/theme'
import ProfilePic from '../../images/profile.jpeg'

import Container from '../Container'
import Links from './Links'
import { MenuIcon } from '../Social'

const Header = ({
  dark,
  bgColor = 'none',
  siteTitle,
  headerColor = 'black',
  sticky = false,
  setSideBarOpen = () => {},
}) => {
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 15px 0 15px 0;
        background: ${dark ? '#090909' : `${bgColor}` || 'none'};
        position: sticky;
        top: 0px;
        z-index: 150;
        box-shadow: 0px 0px #090909;
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
              display: flex;
              align-items: center;
            `}
          >
            <div
              css={css`
                flex: 1;
                color: 'white';
                display: flex;
                align-items: center;
              `}
            >
              <MediaQuery maxDeviceWidth={450}>
                <div
                  css={css`
                    margin-right: 10px;
                  `}
                >
                  <MenuIcon
                    color="white"
                    onClick={() => {
                      setSideBarOpen()
                    }}
                  />
                </div>
              </MediaQuery>
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
                      max-width: 1.75rem;
                      max-height: 1.75rem;
                      border-radius: 100%;
                      margin: 0px;
                    `}
                    alt="Eric"
                  />
                  <span
                    css={css`
                      margin-left: 0.75rem;
                      color: 'white';
                      :hover {
                        color: #ccc;
                      }
                    `}
                  >
                    {siteTitle}
                  </span>
                </div>
              </Link>
            </div>
            <MediaQuery minDeviceWidth={450}>
              <Links />
            </MediaQuery>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
