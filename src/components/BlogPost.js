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
        padding: 40px;
        ${bpMaxSM} {
          padding: 20px;
        }
        display: flex;
        flex-direction: column;
      `}
    >
      {post.frontmatter.banner && (
        <div
          css={css`
            padding: 60px 60px 40px 60px;
            ${bpMaxSM} {
              padding: 20px;
            }
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
      <small
        css={css`
          margin-bottom: 2px;
          font-weight: 300;
          color: #777;
        `}
      >
        {post.frontmatter.date}
      </small>
      <h2
        css={css`
          margin-top: 10px;
          margin-bottom: 10px;
        `}
      >
        <Link
          aria-label={`View ${post.frontmatter.title} article`}
          to={`/${post.frontmatter.slug}`}
        >
          {post.frontmatter.title}
        </Link>
      </h2>
      <p
        css={css`
          margin-top: 10px;
        `}
      >
        {post.excerpt}
      </p>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            margin-top: 10px;
            flex: 1;
          `}
        >
          <div
            css={css`
              font-size: 16px;
              margin-bottom: 5px;
            `}
          >
            Tags:
          </div>
          {post.frontmatter.tags.map((tag, index) => (
            <TagLabel key={index}>{tag}</TagLabel>
          ))}
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link
            to={`/${post.frontmatter.slug}`}
            aria-label={`view "${post.frontmatter.title}" article`}
          >
            Read Article →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
