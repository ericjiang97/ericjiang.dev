import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMaxSM } from '../../lib/breakpoints'

import Link from '../Link'
import { lighten } from 'polished'
import theme from '../../../config/theme'
import CalendarIcon from '../CalendarIcon'

function FeaturedPost({ post }) {
  console.log(post.frontmatter.banner.childImageSharp.fluid.src)
  return (
    <Link
      aria-label={`View ${post.frontmatter.title} article`}
      to={`/${post.frontmatter.slug}`}
    >
      <div
        key={post.id}
        css={css`
          color: ${theme.brand.primary};
          background-image: url(${post.frontmatter.banner.childImageSharp.fluid.src});
          background-size: cover;
          background-repeat: no-repeat;
          flex: 1;
          border-radius: 1.25rem;
          h2 {
            margin-top: 5px;
            margin-bottom: 10px;
          }
          flex: 1;
          min-width: 280px;
          min-height: 300px;
          height: 40vh
          max-width: 100%;

          @media (min-width: 500px) {
            margin-left: 0.25rem;
          }
        `}
      >
        <div
          css={css`
            padding: 24px 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <div>
            <div
              css={css`
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                padding: 0.25rem 0.5rem;
                color: white;
                background-color: ${lighten(0.2, theme.brand.primary)};
              `}
            >
              <div
                css={css`
                  flex: 1;
                `}
              >
                {post.frontmatter.tags.map((tag, index) => (
                  <span
                    css={css`
                      color: white;
                      font-size: 0.65rem;
                      text-transform: uppercase;
                    `}
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <div
                css={css`
                  margin-top: 0.25rem;
                  margin-bottom: 0.5rem;
                  padding: 0.25rem 0.5rem;
                  font-size: 1.5rem;
                  background-color: ${lighten(0.6, theme.brand.primary)};
                `}>
              <h2>
                {post.frontmatter.title}
              </h2>
              </div>
              <div
                css={css`
                  margin-bottom: 0.5rem;
                  padding: 0.25rem 0.5rem;
                  background-color: ${lighten(0.6, theme.brand.primary)};
                `}
              >
                <div
                  css={css`
                    display: flex;
                    align-items: center;
                    
                  `}
                >
                  <CalendarIcon color={theme.brand.primary} size={12} />
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
        </div>
      </div>
    </Link>
  )
}

export default FeaturedPost
