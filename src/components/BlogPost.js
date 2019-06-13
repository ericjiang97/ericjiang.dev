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
      <h2
        css={css`
          margin-top: 30px;
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
      <small>{post.frontmatter.date}</small>
      <p
        css={css`
          margin-top: 10px;
        `}
      >
        {post.excerpt}
      </p>
      <Link
        to={`/${post.frontmatter.slug}`}
        aria-label={`view "${post.frontmatter.title}" article`}
      >
        Read Article →
      </Link>
      <div>
        <h3>Tagged with:</h3>
        {post.frontmatter.tags.map((tag, index) => (
          <TagLabel key={index}>{tag}</TagLabel>
        ))}
      </div>
    </div>
  )
}

export default BlogPost
