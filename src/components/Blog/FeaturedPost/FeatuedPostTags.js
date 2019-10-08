import React from 'react'
import css from '@emotion/css'
import { lighten } from 'polished'

import theme from '../../../../config/theme'

const FeaturedPostTags = ({
  tags = [],
  backgroundColor = lighten(0.4, theme.brand.primary),
  color = theme.brand.primary,
  padding = '0rem',
}) => {
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        color: white;
        background-color: ${backgroundColor}};
      `}
    >
      <div
        css={css`
          flex: 1;
          padding: ${padding};
        `}
      >
        {tags.map((tag, index) => (
          <>
            <span
              css={css`
                color: ${color};
                font-size: 0.65rem;
                text-transform: uppercase;
                margin-right: 0.75rem;
              `}
              key={index}
            >
              {tag}
            </span>
          </>
        ))}
      </div>
    </div>
  )
}
export default FeaturedPostTags
