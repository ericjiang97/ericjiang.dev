import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMaxSM } from '../../lib/breakpoints'

import Link from '../Link'
import TagLabel from '../TagLabel'
import { lighten } from 'polished'
import theme from '../../../config/theme'
import CalendarIcon from '../CalendarIcon'
import FeaturedPostTags from './FeaturedPost/FeatuedPostTags'

function BlogPost({ post }) {
  return (
    <div
      key={post.id}
      css={css`
        margin-top: 1.25rem;
        background: white;

        small {
          color: ${lighten(0.1, theme.brand.primary)};
          font-weight: 300;
        }
        h2 {
          margin-top: 5px;
          margin-bottom: 10px;
          font-size: 1em;
        }
        flex: 1;
        min-width: 280px;
      `}
    >
      <div
        css={css`
          padding: 1.25rem 2.25rem;
          display: flex;
          flex-direction: row;
          flex: 1;
        `}
      >
        {post.frontmatter.banner && (
          <div
            css={css`
              flex: 1;
              padding: 0.25rem;
            `}
          >
            <Link
              aria-label={`View ${post.frontmatter.title} article`}
              to={`/${post.frontmatter.slug}`}
            >
              <img src={post.frontmatter.banner.childImageSharp.fluid.src} />
            </Link>
          </div>
        )}
        <div
          css={css`
            margin-left: ${post.frontmatter.banner ? '2rem' : '0px'};
            flex: 1;
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
            <FeaturedPostTags
              tags={post.frontmatter.tags}
              backgroundColor="white"
              color={theme.brand.primary}
            />
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
              css={css``}
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
            <CalendarIcon color={lighten(0.1, theme.brand.primary)} size={12} />
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
