import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'
import Hero from '../components/Hero'
import LinkButton from '../components/LinkButton'

import TechTalksImg from '../images/conference.svg'
import AboutImg from '../images/about_me.svg'
import SWEImg from '../images/swe_coding.svg'

const PostTitle = styled.h2`
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
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
          background-color: #fff;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
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
        </div>
        <hr />
        <h2>Latest Posts</h2>
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
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
            {post.frontmatter.keywords && (
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                `}
              >
                {post.frontmatter.keywords.map((keyword, i) => {
                  return (
                    <div
                      key={i}
                      css={css`
                        background-color: #ddd;
                        margin: 0px 5px 0px 5px;
                        padding: 2px 5px 2px 5px;
                      `}
                    >
                      {keyword}
                    </div>
                  )
                })}
              </div>
            )}
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
            <span />
          </div>
        ))}
        <Link
          to="/blog"
          aria-label="Visit blog page"
          className="button-secondary"
        >
          View all articles
        </Link>
        <hr />
      </Container>
    </Layout>
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
