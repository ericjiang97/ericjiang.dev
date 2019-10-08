import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMaxSM } from '../../../lib/breakpoints'

import Link from '../../Link'
import { lighten } from 'polished'
import theme from '../../../../config/theme'
import FeaturedPostTags from './FeatuedPostTags'
import FeatuedPostTitle from './FeatuedPostTitle'
import FeaturedPostDate from './FeaturedPostDate'

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
          background-image: url(${
            post.frontmatter.banner.childImageSharp.fluid.src
          });
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
            flex: 1;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <div>
            <FeaturedPostTags
              tags={post.frontmatter.tags}
              padding="0.25rem 0.5rem"
            />
            <FeatuedPostTitle title={post.frontmatter.title} />
            <FeaturedPostDate date={post.frontmatter.date} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedPost
