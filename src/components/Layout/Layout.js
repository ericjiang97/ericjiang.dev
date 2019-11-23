import React, { Fragment, useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

// Components
import mdxComponents from '../mdx'
import Header from '../Header/Header'
import BlogHeader from '../Blog/BlogHeader'
import Sidebar from '../Sidebar/Sidebar'

// Configurations
import theme from '../../../config/theme'
import config from '../../../config/website'
import Hero from '../Hero'
import { globalStyles } from './styles'
import Backdrop from '../Sidebar/Backdrop'
import { lighten } from 'polished'
import Container from '../Container'
import { RssFeed, Twitter, GitHub, LinkedIn } from '../Social'

export default ({
  site,
  frontmatter = {},
  children,
  dark = true,
  showHero = false,
  showBlogHeader = false,
  isBlog = false,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const {
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global styles={globalStyles} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
            background-color: ${dark ? theme.brand.primary : '#efefef'};
          `}
        >
          <Helmet
            title={config.siteTitle}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
            ]}
          >
            <html lang="en" />
            <noscript>This site runs best with JavaScript enabled.</noscript>
          </Helmet>
          {process.env.BUILD_ENVIRONMENT === 'staging' && (
            <div
              css={css`
                color: ${theme.brand.primary};
                padding: 0.25rem 0.75rem;
                background-color: orange;
              `}
            >
              THIS IS A STAGING BUILD. BUILDS ON THIS BRANCH/ENVIRONMENT MAY BE
              OUT OF DATE OR UNSTABLE.
            </div>
          )}
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                @media (min-width: 1224px) {
                  flex-direction: row;
                }
              `}
            >
              <Sidebar open={sidebarOpen} />
              {sidebarOpen && (
                <Backdrop onClick={() => setSidebarOpen(false)} />
              )}
              <div
                css={css`
                  flex: 3;
                  overflow-x: hidden;
                  display: flex;
                  flex-direction: column;
                `}
              >
                {!showBlogHeader && (
                  <Header
                    siteTitle={site.siteMetadata.title}
                    bgColor={lighten(0.15, theme.brand.primary)}
                    headerColor={theme.colors.white}
                    setSideBarOpen={() => setSidebarOpen(true)}
                  />
                )}
                {showBlogHeader && (
                  <BlogHeader setSideBarOpen={() => setSidebarOpen(true)} />
                )}
                {showHero && <Hero />}
                <div
                  css={css`
                    padding-bottom: 0;
                    // background-color: #fff;
                    padding: 10px 24px;
                    max-width: 100vw;
                    @media (min-width: 650px) and (max-width: 1200px) {
                      margin-left: 100px;
                    }
                  `}
                >
                  <MDXProvider components={mdxComponents}>
                    {children}
                  </MDXProvider>
                </div>
                <div
                  css={css`
                    padding: 1.5rem 1.5rem;
                    color: white;
                    background-color: ${theme.brand.primary};
                  `}
                >
                  <Container>
                    <div
                      css={css`
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                      `}
                    >
                      <div
                        css={css`
                          flex: 1;
                          display: flex;
                          flex-direction: column;
                          min-width: 280px;
                          margin-bottom: 0.5rem;
                          a {
                            color: white;
                            :visited {
                              color: white;
                            }
                            :hover {
                              color: ${lighten(0.5, theme.brand.primary)};
                            }
                          }
                        `}
                      >
                        <span
                        >{`Copyright \u00A9  Eric Jiang ${new Date().getFullYear()}`}</span>
                        <span>
                          Built with{' '}
                          <a
                            href="https://gatsbyjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Gatsby
                          </a>
                          . Powered by{' '}
                          <a
                            href="https://netlify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Netlify
                          </a>
                          .
                        </span>
                      </div>

                      <div>
                        <div>Follow me on</div>
                        <div
                          css={css`
                            display: flex;
                            padding: 0px 0px;
                          `}
                        >
                          <RssFeed color={theme.colors.white} />
                          <Twitter color={theme.colors.white} />
                          <GitHub color={theme.colors.white} />
                          <LinkedIn color={theme.colors.white} />
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author {
        name
      }
      keywords
    }
  }
`
