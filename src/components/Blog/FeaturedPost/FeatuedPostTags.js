import React from 'react'
import css from '@emotion/css'
import { lighten } from 'polished'

import theme from '../../../../config/theme'

const FeaturedPostTags = ({tags = []}) => {
    return <div
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
      {tags.map((tag, index) => (
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
}
export default FeaturedPostTags