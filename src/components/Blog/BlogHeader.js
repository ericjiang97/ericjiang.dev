import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../../config/theme'
import Container from '../Container'
import ProfilePic from '../../images/profile.jpeg'

const linkStyles = css({
  margin: 10,
  color: 'white',
  ':hover,:focus': {
    color: '#ccc',
  },
})

function BlogHeader({ data, setSidebarOpen = () => {} }) {
  console.log(data)
  // const allTags = allMarkdownRemark.group.map(tag => {
  //   return {
  //     ...tag,
  //   }
  // })
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            ...site
            siteMetadata {
              title
            }
          }
          allMarkdownRemark(limit: 10) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => {
        console.log()
        return (
          <div
            css={css`
              background-color: ${theme.brand.primary};
              position: sticky;
              top: 0px;
              z-index: 150;
              box-shadow: 0px 0px #090909;
            `}
          >
            <Container
              css={css`
                display: flex;
                flex: 1;
                justify-content: center;
                padding: 1.25rem 1.25rem;
                h2 {
                  color: white;
                  margin: 0rem;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex: 1;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <img
                  src={ProfilePic}
                  css={css`
                    max-width: 1.75rem;
                    max-height: 1.75rem;
                    border-radius: 100%;
                    margin: 0px;
                    margin-right: 1.25rem;
                  `}
                  alt="Eric"
                />
                <h2>Eric Jiang's Blog</h2>
              </div>
            </Container>
            <Container
              noVerticalPadding
              css={css`
                padding: 5px 20px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
              `}
            >
              <Link
                to="/"
                aria-label="home page"
                activeClassName="active"
                css={linkStyles}
              >
                HOME
              </Link>
              <Link
                to="/blog"
                aria-label="blog home"
                activeClassName="active"
                css={linkStyles}
              >
                BLOG HOME
              </Link>

              <div
                css={css`
                  margin-left: 1.25rem;
                  margin-right: 1.25rem;
                  display: flex;
                  flex-wrap: wrap;
                  align-items: center;
                `}
              >
                {data.allMarkdownRemark.group.map(tag => {
                  const { fieldValue } = tag
                  return (
                    <Link
                      to={`/tags/${fieldValue}`}
                      aria-label="about me"
                      activeClassName="active"
                      css={linkStyles}
                    >
                      {`${fieldValue.toUpperCase()}`}
                    </Link>
                  )
                })}
              </div>
              <Link
                to="/tags"
                aria-label="all tags"
                activeClassName="active"
                css={linkStyles}
              >
                All tags
              </Link>
            </Container>
          </div>
        )
      }}
    />
  )
}

export default BlogHeader
