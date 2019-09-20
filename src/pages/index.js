import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

// Components
import Layout from '../components/Layout'
import Link from '../components/Link'
import Container from 'components/Container'

// Config
import theme from '../../config/theme'
import { lighten } from 'polished'
import ProjectCard from '../components/Projects/ProjectCard'
import FeaturedProjectCard from '../components/Projects/FeaturedProjectCard'
import { projects } from '../data/projects'

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
      showHero={true}
      showSidebar={false}
    >
      <Container
        css={css`
          padding-bottom: 0;
          color: white;
        `}
      >
        <div
          css={css`
            padding: 10px 0px;
          `}
        >
          <h2
            css={css`
              color: white;
            `}
          >
            Projects
          </h2>
          <h3
            css={css`
              color: white;
            `}
          >
            Featured Projects
          </h3>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            {projects.featured.map(project => (
              <FeaturedProjectCard
                title={project.title}
                img={project.image}
                fromDate={project.dates.from}
                toDate={project.dates.to}
                projectDescription={project.description}
                githubUrl={project.githubRepo || null}
                url={project.link}
              />
            ))}
          </div>

          <h3
            css={css`
              color: white;
            `}
          >
            Other Projects
          </h3>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            {projects.other.map(project => (
              <ProjectCard
                title={project.title}
                projectDescription={project.description}
                githubUrl={project.githubRepo || null}
                url={project.link}
              />
            ))}
          </div>
        </div>
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
          excerpt(pruneLength: 150)
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
            date(formatString: "ddd DD MMMM YYYY")
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
