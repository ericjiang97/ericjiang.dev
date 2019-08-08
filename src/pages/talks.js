import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import theme from '../../config/theme'
import { talks } from '../data/talks'

import JuniorDevTalk from '../images/gcp-juniordev-talk.jpg'

const PostTitle = styled.h2`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <Container
        css={css`
          padding-bottom: 0;
          background-color: #fff;
        `}
      >
        <h1>Talks</h1>
        <img src={JuniorDevTalk} width="100%" alt="JuniorDev tech talk" />
        <p
          css={css`
            font-size: 16px;
          `}
        >
          I do quite a few talks - from Google Cloud all the way to Student
          Innovation. So check them out below
        </p>
        <hr />
        {talks.map((talk, index) => {
          const { title, description, delivery, links } = talk
          return (
            <div key={index}>
              <Link to={links.slides} aria-label={title}>
                <PostTitle>{title}</PostTitle>
              </Link>
              <span
                css={css`
                  font-size: 0.8em;
                `}
              >
                Date: {`${delivery.date} `}
                {delivery.location && (
                  <span>- Location: {`${delivery.location} `}</span>
                )}
                {delivery.organiser && (
                  <span>
                    - Organiser:{' '}
                    <a href={delivery.organiser.link}>{`${
                      delivery.organiser.name
                    }`}</a>
                  </span>
                )}
              </span>
              <p>{description}</p>
              {links.code && (
                <div>
                  {`Code Sample available `}
                  <Link to={links.code} aria-label={title}>
                    here
                  </Link>
                </div>
              )}
              <hr />
            </div>
          )
        })}
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
