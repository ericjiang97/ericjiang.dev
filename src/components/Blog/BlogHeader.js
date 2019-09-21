import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import theme from '../../../config/theme'
import Container from '../Container'

const linkStyles = css({
  margin: 10,
  color: 'white',
  ':hover,:focus': {
    color: '#ccc',
  },
})

function BlogHeader({ data }) {
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
          allMarkdownRemark(limit: 2000) {
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
            `}
          >
            <Container
              noVerticalPadding
              css={css`
                padding: 5px 20px;
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
                    {`${fieldValue.charAt(0).toUpperCase()}${fieldValue.slice(
                      1,
                    )}`}
                  </Link>
                )
              })}
              <Link
                to="/tags"
                aria-label="about me"
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
