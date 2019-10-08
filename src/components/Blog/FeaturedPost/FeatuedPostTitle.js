import React from 'react'
import css from '@emotion/css'
import { lighten } from 'polished'

import theme from '../../../../config/theme'

const FeatuedPostTitle = ({title = ''}) => {
    return <div
    css={css`
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      padding: 0.25rem 0.5rem;
      font-size: 1.5rem;
      background-color: ${lighten(0.6, theme.brand.primary)};
    `}>
  <h2>
    {title}
  </h2>
  </div>
}
export default FeatuedPostTitle