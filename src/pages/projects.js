import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from 'components/Container'
import theme from '../../config/theme'
import SmallHero from '../components/SmallHero'
import { projects } from '../data/projects'
import Remark from 'react-markdown'

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
        <h1>Projects</h1>
        <hr />
        {projects.map((project, index) => {
          const { title, dates, description, copyright, link, image } = project
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
              <span
                css={css`
                  font-size: 0.8em;
                `}
              >
                {copyright}
              </span>
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
