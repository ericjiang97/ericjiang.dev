import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMaxSM } from '../../lib/breakpoints'

import Link from '../Link'
import TagLabel from '../TagLabel'
import { lighten } from 'polished'
import theme from '../../../config/theme'
import CalendarIcon from '../CalendarIcon'

function BlogPost({ post }) {
  return (
    <div
      key={post.id}
      css={css`
        :not(:first-of-type) {
          margin-top: 20px;
          ${bpMaxSM} {
            margin-top: 20px;
          }
        }
        :first-of-type {
          margin-top: 20px;
          ${bpMaxSM} {
            margin-top: 20px;
          }
        }
        background: white;

        border-radius: 1.25rem;

        background-color: ${lighten(0.05, theme.brand.primary)};
        :hover {
          background-color: ${lighten(0.1, theme.brand.primary)};
        }
        small {
          color: #ccc;
          font-weight: 300;
        }
        h2 {
          color: ${lighten(0.7, theme.brand.primary)};
          margin-top: 5px;
          margin-bottom: 10px;
          font-size: 1em;
        }
        p {
          color: ${lighten(0.8, theme.brand.primary)};
        }
        flex: 1;
        min-width: 280px;
        width: 25%;
        @media (min-width: 500px) {
          margin-left: 0.25rem;
        }
      `}
    >
      <div
        css={css`
          padding: 12px 24px;
          display: flex;
          flex-direction: row;
        `}
      >
        {post.frontmatter.banner && (
          <div
            css={css`
              width: 10rem;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <Link
              aria-label={`View ${post.frontmatter.title} article`}
              to={`/${post.frontmatter.slug}`}
            >
              <Img sizes={post.frontmatter.banner.childImageSharp.fluid} />
            </Link>
          </div>
        )}
        <div
          css={css`
            margin-left: ${post.frontmatter.banner ? '2rem' : '0px'};
            flex: 2;
          `}
        >
          <div
            css={css`
              flex: 1;
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 0.75rem;
            `}
          >
            <div
              css={css`
                margin-top: 5px;
                flex: 1;
              `}
            >
              {post.frontmatter.tags.map((tag, index) => (
                <TagLabel key={index}>{tag}</TagLabel>
              ))}
            </div>
          </div>
          <h2
            css={css`
              margin-top: 5px;
              margin-bottom: 10px;
              font-size: 1em;
            `}
          >
            <Link
              aria-label={`View ${post.frontmatter.title} article`}
              to={`/${post.frontmatter.slug}`}
              css={css`
                :visited {
                  color: ${lighten(0.7, theme.brand.primary)};
                }
              `}
            >
              {post.frontmatter.title}
            </Link>
          </h2>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <CalendarIcon color={'#ccc'} size={12} />
            <small
              css={css`
                margin-left: 0.25rem;
                font-size: 12px;
              `}
            >
              {post.frontmatter.date}
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
