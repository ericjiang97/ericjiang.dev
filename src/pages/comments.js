import React from 'react'
import { css } from '@emotion/core'

// COMPONENTS
import Layout from '../components/Layout'

// CONFIG
import theme from '../../config/theme'

// Images
import LostImage from '../images/lost.svg'
import Container from '../components/Container'
import { comments } from '../data/comments'

export default ({ data: { site } }) => (
  <div>
    <Layout
      site={site}
      headerColor={theme.colors.white}
      headerBg={theme.brand.primary}
    >
      <Container
        css={css`
          padding: 2em;
          display: flex;
          flex-direction: column;
          color: white;
        `}
      >
        <h1
          css={css`
            color: white;
          `}
        >
          Comments page
        </h1>
        <div>
          {comments.map((comment, index) => {
            return (
              <div
                css={css`
                  border-left: 5px solid green;
                  padding: 0.25rem 0.5rem;
                  blockquote {
                    padding-left: 0.25rem !important;
                    margin-bottom: 0.25rem;
                  }
                  span {
                    margin-top: 0.25rem;
                    padding-left: 0.25rem !important;
                  }
                  margin-bottom: 0.25rem;
                  margin-top: 0.25rem;
                `}
              >
                <blockquote>{comment.message}</blockquote>
                <span>- {comment.person}</span>
              </div>
            )
          })}
        </div>
      </Container>
    </Layout>
  </div>
)

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
