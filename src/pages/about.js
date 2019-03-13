import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from 'components/Container'
import theme from '../../config/theme'
import SmallHero from '../components/SmallHero'

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <SmallHero />
      <Container
        css={css`
          padding-bottom: 0;
          background-color: #fff;
        `}
      >
        <h1>About Me</h1>
        <p>
          I'm currently in my final year (studying part-time) in my Bachelor of
          Information Technology at{' '}
          <a
            href="https://monash.edu"
            target="_blank"
            rel="noreferrer noopener"
          >
            Monash University
          </a>{' '}
          degree where I'm majoring in Computer networks and security. Even
          though I'm majoring in the Cybersecurity, I still love other sides of
          the IT field such as Product Management, Software Engineering and
          Web/Cloud Technologies. And applying knowledge from the Cybersecurity
          and DevOps into Software Development.
        </p>
        <p>
          Over the past few years I've been building{' '}
          <a
            href="https://monplan.apps.monash.edu"
            target="_blank"
            rel="noreferrer noopener"
          >
            MonPlan
          </a>
          , which is a project that I founded and that the University brought
          on-board - which is now the Official Enterprise Course Planning tool
          for the university. Something that I'm currently proud of is winning
          the Rising Star Category of the 2019 itNews Benchmark Awards for
          delivering MonPlan (while I'm still a student)
        </p>
        <p>You can find my resume here</p>
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
