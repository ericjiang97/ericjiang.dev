import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

// Components
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'
import LinkButton from '../components/LinkButton'

// Config
import theme from '../../config/theme'

import TechTalksImg from '../images/conference.svg'
import AboutImg from '../images/about_me.svg'
import SWEImg from '../images/swe_coding.svg'
import PhotosImg from '../images/photos.svg'
import BlogPost from '../components/BlogPost'

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
      showHero={true}
    >
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <h2>Quick Links</h2>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding: 0px 0px 10px 0px;
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
        <hr />
        <div
          css={css`
            text-align: center;
          `}
        >
          <h2>Latest Posts</h2>
        </div>
        {allMdx.edges.map(({ node: post }) => (
          <>
            <BlogPost post={post} />
            <hr />
          </>
        ))}
        <Link
          to="/blog"
          aria-label="Visit blog page"
          css={css({
            borderRadius: 4,
            padding: '12px 12px',
            margin: 12,
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
          excerpt(pruneLength: 300)
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
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
