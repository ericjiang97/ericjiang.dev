import React, { Fragment, useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

// Components
import mdxComponents from '../mdx'
import Header from '../Header/Header'
import BlogHeader from '../BlogHeader'
import Sidebar from '../Sidebar/Sidebar'

// Configurations
import theme from '../../../config/theme'
import config from '../../../config/website'
import Hero from '../Hero'
import { globalStyles } from './styles'
import Backdrop from '../Sidebar/Backdrop'

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
              {sidebarOpen && <Sidebar />}
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
                  bgColor={theme.brand.primary}
                  headerColor={theme.colors.white}
                  setSideBarOpen={() => setSidebarOpen(true)}
                />
                {showBlogHeader && <BlogHeader />}
                <div
                  css={css`
                    padding-bottom: 0;
                    // background-color: #fff;
                    padding: 10px 24px;
                    max-width: 100vw;
                  `}
                >
                  <MDXProvider components={mdxComponents}>
                    {children}
                  </MDXProvider>
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
