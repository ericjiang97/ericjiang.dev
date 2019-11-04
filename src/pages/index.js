import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { lighten } from 'polished'

// Components
import Layout from '../components/Layout'
import Container from 'components/Container'
import ProjectCard from '../components/Projects/ProjectCard'
import FeaturedProjectCard from '../components/Projects/FeaturedProjectCard'

// Containers
import PreviousExperienceContainer from '../containers/PreviousExperienceContainer'

// Config
import theme from '../../config/theme'
import { rhythm } from '../lib/typography'

// Data
import { projects } from '../data/projects'
import { talks } from '../data/talks'
import TechTalkCard from '../components/TechTalkCard'
import experience from '../data/experience'

export default function Index({ data: { site } }) {
  return (
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
      showHero={true}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <Container
          css={css`
            padding-bottom: 0;
            color: white;
            flex: 1;
            @media (min-width: 481px) and (max-width: 1365px) {
              margin-left: 100px;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
              color: ${lighten(0.5, theme.brand.primary)};
              position: relative;
              z-index: 5;
              line-height: 1.5;
              margin: 0;
              max-width: ${rhythm(20)};
              font-weight: 500;
            }
            h3 {
              color: ${lighten(0.5, theme.brand.primary)};
            }
          `}
        >
          <div
            css={css`
              padding: 10px 0px;

              a {
                color: ${lighten(0.65, theme.brand.primary)};
                :hover {
                  color: ${lighten(0.55, theme.brand.primary)};
                }
                :visited {
                  color: ${lighten(0.4, theme.brand.primary)};
                }
              }
            `}
          >
            <h2>I am...</h2>
            <p>
              currently in my final year (studying part-time) in my Bachelor of
              Information Technology at{' '}
              <a
                href="https://monash.edu"
                target="_blank"
                rel="noreferrer noopener"
              >
                Monash University
              </a>
              , and majoring in Computer networks and security.
            </p>
            <p>
              You can find more about me and why I chose an IT degree at Monash{' '}
              <a href="https://www.monash.edu/it/future-students/meet-our-students/eric-jiang">
                here
              </a>
            </p>
            <p>
              Not only do I love writing awesome software and cybersecurity, I
              also love incoporating other sides of the tech field such as
              DevOps, Product Management, Software Engineering and Web/Cloud
              Technologies into my development practices.
            </p>
            <p>
              Something that I'm currently proud of is winning the Rising Star
              Category of the 2019 itNews Benchmark Awards for founding and
              delivering{' '}
              <a
                href="https://monplan.apps.monash.edu"
                target="_blank"
                rel="noreferrer noopener"
              >
                MonPlan
              </a>{' '}
              (while I'm still a student)
            </p>
            <p>
              I also love impacting to everyone in the community, that is why I
              love mentoring other fellow developers, friends and family, and
              why I also love participating in many community events such as
              hackathons, conferences and meetups.
            </p>
          </div>
          <div
            css={css`
              padding: 15px 0px;
            `}
          >
            <h2>I have worked at...</h2>
            <PreviousExperienceContainer
              experiences={experience.filter(experience => experience.public)}
            />
            <div>
              <a
                href="./downloads/EricResume_Aug2019_Software.pdf"
                css={css`
                  color: ${theme.colors.green};
                  margin-bottom: 1.25rem;
                  margin-top: 1.25rem;
                  border-radius: 5px;
                `}
              >
                <div
                  css={css`
                    padding: 5px 10px;
                    border: solid 1px ${theme.colors.green};
                    max-width: 250px;
                    :hover {
                      background-color: ${theme.colors.green};
                      color: ${theme.brand.projectDescription};
                    }
                  `}
                >
                  Download Resume
                </div>
              </a>
            </div>
          </div>
          <div
            css={css`
              display: flex;

              flex-direction: column;
            `}
          >
            <div
              css={css`
                width: 100%;
              `}
            >
              <h2>I have made...</h2>
              <h3>Featured Projects</h3>
            </div>
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

            <h3>Other Projects</h3>
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
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

          <div
            css={css`
              margin-top: 1rem;
            `}
          >
            <h2>Some of the talks I have given include...</h2>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            {talks.map(talk => (
              <TechTalkCard
                title={talk.title}
                githubUrl={talk.links.code}
                url={talk.links.slides}
                description={talk.description}
                date={talk.delivery.date}
              />
            ))}
          </div>
          <div>
            <h3>Contact</h3>
            <div>
              I'm currently not available for contracting or freelancing, But
              feel free to shoot me an email at{' '}
              <a
                href="mailto:freelancing@ericjiang.dev"
                target="_blank"
                rel="noreferrer noopener"
                css={css`
                  color: ${lighten(0.45, theme.brand.primary)};
                  :hover {
                    color: ${lighten(0.55, theme.brand.primary)};
                  }
                  :visited {
                    color: ${lighten(0.45, theme.brand.primary)};
                  }
                `}
              >
                freelancing@ericjiang.dev
              </a>
            </div>
          </div>
        </Container>
      </div>
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
  }
`
