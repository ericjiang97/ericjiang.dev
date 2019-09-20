import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

// Components
import Layout from '../components/Layout'
import Container from 'components/Container'

// Config
import theme from '../../config/theme'
import ProjectCard from '../components/Projects/ProjectCard'
import FeaturedProjectCard from '../components/Projects/FeaturedProjectCard'
import { projects } from '../data/projects'
import { lighten } from 'polished'

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
          color: white;
        `}
      >
        <div
          css={css`
            padding: 10px 0px;
            border-bottom: solid 1px ${lighten(0.4, theme.brand.primary)};
          `}
        >
          <h2
            css={css`
              color: ${lighten(0.7, theme.brand.primary)};
            `}
          >
            A bit about me...
          </h2>
          <p>I love delivering impact to everyone in the community.</p>
          <p>
            I'm currently in my final year (studying part-time) in my Bachelor
            of Information Technology at{' '}
            <a
              href="https://monash.edu"
              target="_blank"
              rel="noreferrer noopener"
              css={css`
                color: white;
                :hover {
                  color: ${lighten(0.6, theme.brand.primary)};
                }
              `}
            >
              Monash University
            </a>
            . I'm majoring in Computer networks and security. I still love other
            sides of the IT field such as Product Management, Software
            Engineering and Web/Cloud Technologies. And applying knowledge from
            the Cybersecurity and DevOps into Software Development.
          </p>
          <p>
            Something that I'm currently proud of is winning the Rising Star
            Category of the 2019 itNews Benchmark Awards for delivering MonPlan
            (while I'm still a student)
          </p>
        </div>
        <div
          css={css`
            padding: 15px 0px;
            border-bottom: solid 1px ${lighten(0.4, theme.brand.primary)};
          `}
        >
          <h2
            css={css`
              color: ${lighten(0.7, theme.brand.primary)};
            `}
          >
            Previous Experience
          </h2>
          <a
            href="./downloads/EricResume_Aug2019_Software.pdf"
            css={css`
              color: ${lighten(0.8, theme.brand.primary)};
              padding: 10px 5px;
              border: solid 1px ${lighten(0.8, theme.brand.primary)};
              margin-bottom: 10px;
              margin-top: 10px;
              border-radius: 5px;
              :hover {
                background-color: ${lighten(0.8, theme.brand.primary)};
                color: ${theme.brand.projectDescription};
              }
            `}
          >
            Download Resume
          </a>
        </div>
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
