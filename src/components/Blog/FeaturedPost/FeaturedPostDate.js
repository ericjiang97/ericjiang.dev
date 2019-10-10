import React from 'react'
import css from '@emotion/css'

import CalendarIcon from '../../CalendarIcon'
import theme from '../../../../config/theme'

const FeaturedPostDate = ({ date = '' }) => {
  return (
    <div
      css={css`
        margin-bottom: 0.5rem;
        padding: 0.25rem 0.5rem;
        background-color: ${theme.brand.primary}};
        color: white;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <CalendarIcon color={'white'} size={12} />
        <small
          css={css`
            margin-left: 0.25rem;
            font-size: 12px;
          `}
        >
          {date}
        </small>
      </div>
    </div>
  )
}

export default FeaturedPostDate
