import React from 'react'
import MediaQuery from 'react-responsive'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { kebabCase } from 'change-case'

import { rhythm } from '../lib/typography'

import theme from '../../config/theme'

import LinkButton from '../components/LinkButton'
import Link from '../components/Link'

// Images
import TechTalksImg from '../images/conference.svg'
import AboutImg from '../images/about_me.svg'
import SWEImg from '../images/swe_coding.svg'
import PhotosImg from '../images/photos.svg'
import Sidebar from '../components/Sidebar'
import TagLabel from '../components/TagLabel'
import Header from '../components/Header'
import { projects } from '../data/projects'
import Remark from 'react-markdown'

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  return (
    <MediaQuery minDeviceWidth={1224}>
      {isDesktopOrLaptop => (
        <div>
          <div
            css={css`
              display: flex;
              flex-direction: ${isDesktopOrLaptop ? 'row' : 'column'};
              flex-wrap: wrap;
            `}
          >
            {isDesktopOrLaptop && <Sidebar />}
            <div
              css={css`
                flex: 3;
                overflow-x: hidden;
                max-height: 100vh;
                display: flex;
                flex-direction: column;
              `}
            >
              {!isDesktopOrLaptop && (
                <Header
                  siteTitle={site.siteMetadata.title}
                  bgColor={theme.brand.primary}
                  headerColor={theme.colors.white}
                />
              )}
              <div
                css={css`
                  padding-bottom: 0;
                  background-color: #fff;
                  padding: 10px 24px;
                  max-width: auto;
                `}
              >
                <h1
                  css={css`
                    position: relative;
                    line-height: 1.5;
                    margin: 0;
                    font-weight: 300;
                    color: ${theme.brand.primary};
                  `}
                >
                  <span role="img" aria-label="wave">
                    👋
                  </span>{' '}
                  Hi, I'm Eric.
                </h1>
                <hr />
                <h2>Quick Links</h2>
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0;
                  `}
                >
                  <LinkButton
                    to="/talks"
                    heading="Talks"
                    backgroundImg={TechTalksImg}
                  />
                  <LinkButton
                    to="/about"
                    heading="About Me"
                    backgroundColor={theme.colors.green}
                    backgroundImg={AboutImg}
                  />
                  <LinkButton
                    to="/projects"
                    heading="Projects"
                    backgroundColor={theme.colors.red}
                    backgroundImg={SWEImg}
                  />
                  <LinkButton
                    to="https://flickr.com/people/lorderikir"
                    heading="Photos"
                    backgroundColor={theme.colors.black}
                    backgroundImg={PhotosImg}
                  />
                </div>
                <hr
                  css={css`
                    margin-top: 10px;
                  `}
                />
                <h1>Projects</h1>
                <hr />
                {projects.map((project, index) => {
                  const {
                    title,
                    dates,
                    description,
                    copyright,
                    link,
                    image,
                  } = project
                  return (
                    <div key={index} id={title}>
                      <a href={link} target="_blank" rel="noreferrer noopener">
                        <h3>{title}</h3>
                      </a>
                      {image && <img src={image} alt="project screenshot" />}
                      <span>{`${dates.from} - ${dates.to || 'Present'}`}</span>
                      <Remark
                        source={description}
                        css={css`
                          font-size: 0.8em;
                        `}
                      />
                      <p
                        css={css`
                          font-size: 0.8em;
                        `}
                      >
                        {copyright}
                      </p>
                      <hr />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </MediaQuery>
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
      limit: 7
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
            tags
          }
        }
      }
    }
  }
`
