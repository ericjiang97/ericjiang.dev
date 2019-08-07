import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { kebabCase } from 'change-case'

import { rhythm } from '../lib/typography'

import theme from '../../config/theme'

import LinkButton from '../components/LinkButton'
import Link from '../components/Link'
import Container from 'components/Container'

// Images
import TechTalksImg from '../images/conference.svg'
import AboutImg from '../images/about_me.svg'
import SWEImg from '../images/swe_coding.svg'
import PhotosImg from '../images/photos.svg'
import Sidebar from '../components/Sidebar'
import TagLabel from '../components/TagLabel'

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
    <div
      css={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      `}
    >
      <Sidebar />
      <div
        css={css`
          flex: 3;
          overflow-y: scroll;
          overflow-x: hidden;
          padding: 10px 24px;
          max-height: 100vh;
        `}
      >
        <Container
          css={css`
            padding-bottom: 0;
            background-color: #fff;
          `}
        >
          <h1
            css={css`
              position: relative;
              z-index: 5;
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
          <h2>Latest Posts</h2>
          {allMdx.edges.map(({ node: post }) => {
            console.log(post.frontmatter)
            return (
              <>
                <div
                  key={post.id}
                  css={css`
                    margin-bottom: 40px;
                  `}
                >
                  {post.frontmatter.banner && (
                    <img
                      src={post.frontmatter.banner.childImageSharp.sizes.src}
                      alt="post banner"
                    />
                  )}
                  <div>
                    <Link
                      to={post.frontmatter.slug}
                      aria-label={`View ${post.frontmatter.title}`}
                    >
                      <PostTitle>{post.frontmatter.title}</PostTitle>
                    </Link>
                    <div
                      css={css`
                        margin-bottom: 10px;
                      `}
                    >
                      <b>{post.frontmatter.date}</b>
                    </div>
                  </div>

                  {post.frontmatter.tags && (
                    <div
                      css={css`
                        display: flex;
                        flex-direction: row;
                      `}
                    >
                      {post.frontmatter.tags.map((tag, i) => {
                        return (
                          <TagLabel
                            to={`/tags/${kebabCase(tag.fieldValue)}/`}
                            key={i}
                          >
                            {tag}
                          </TagLabel>
                        )
                      })}
                    </div>
                  )}
                  <Description>{post.excerpt}</Description>
                  <Link
                    to={post.frontmatter.slug}
                    aria-label={`View ${post.frontmatter.title}`}
                  >
                    Read Article →
                  </Link>
                  <span />
                </div>
                <hr />
              </>
            )
          })}
          <Link
            to="/blog"
            aria-label="Visit blog page"
            css={css({
              borderRadius: 4,
              padding: '12px 12px',
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
      </div>
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
