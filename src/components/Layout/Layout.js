import React, { Fragment, useState } from 'react'
import MediaQuery from 'react-responsive'
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
import Footer from '../Footer'

export default ({
  site,
  frontmatter = {},
  children,
  dark,
  headerBg,
  headerColor,
  noSubscribeForm,
  showHero = false,
  stickyHeader = false,
  showBlogHeader = false,
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
            background-color: ${theme.brand.primary};
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
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: 'column';
                flex-wrap: wrap;
                @media (min-width: 1224px) {
                  flex-direction: 'row';
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
                  max-height: 100vh;
                  display: flex;
                  flex-direction: column;
                `}
              >
                <Header
                  siteTitle={site.siteMetadata.title}
                  bgColor={lighten(0.15, theme.brand.primary)}
                  headerColor={theme.colors.white}
                  setSideBarOpen={() => setSidebarOpen(true)}
                />
                {showBlogHeader && <BlogHeader />}
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
                    color: white;
                    position: fixed;
                    bottom: 2.5rem;
                    display: fixed;
                    width: 100px;
                    margin-bottom: 3.5rem;
                    @media (max-width: 650px) {
                      display: none;
                    }
                  `}
                >
                  <div>
                    <div
                      css={css`
                        transform: rotate(-90deg);
                      `}
                    >
                      Social
                    </div>
                  </div>
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      border-left: 1px solid white;
                      padding: 0px 10px;
                    `}
                  >
                    <RssFeed color={theme.colors.white} />
                    <Twitter color={theme.colors.white} />
                    <GitHub color={theme.colors.white} />
                    <LinkedIn color={theme.colors.white} />
                  </div>
                </div>
                <div
                  css={css`
                    padding: 1.5rem 1.5rem;
                    color: white;
                  `}
                >
                  <Container>
                    <div
                      css={css`
                        display: flex;
                        flex-direction: column;
                      `}
                    >
                      <span
                      >{`Copyright \u00A9  Eric Jiang ${new Date().getFullYear()}`}</span>
                      <span>Built with Gatsby. Powered by Netlify.</span>
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
