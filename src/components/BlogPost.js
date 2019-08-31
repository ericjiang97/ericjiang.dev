import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'

import Link from './Link'
import TagLabel from './TagLabel'

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
        .gatsby-image-wrapper {
        }
        background: white;
        padding: 12px 24px;
        ${bpMaxSM} {
          padding: 20px;
        }
        display: flex;
        flex-direction: column;
        border-bottom: solid 1px #eee;
      `}
    >
      {post.frontmatter.banner && (
        <div>
          <Link
            aria-label={`View ${post.frontmatter.title} article`}
            to={`/${post.frontmatter.slug}`}
          >
            <Img
              sizes={post.frontmatter.banner.childImageSharp.fluid}
              style={{ width: 500 }}
            />
          </Link>
        </div>
      )}
      <small
        css={css`
          margin-top: 10px;
          margin-bottom: 2px;
          font-weight: 300;
          color: #777;
        `}
      >
        {post.frontmatter.date}
      </small>
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
        >
          {post.frontmatter.title}
        </Link>
      </h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 5px;
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
      {post.excerpt && (
        <p
          css={css`
            margin-top: 10px;
            font-size: 0.75em;
          `}
        >
          {post.excerpt}
        </p>
      )}
    </div>
  )
}

export default BlogPost
