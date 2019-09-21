import React from 'react'
import css from '@emotion/css'
import { lighten } from 'polished'
import theme from '../../config/theme'

const Divider = () => {
  return (
    <hr
      css={css`
        border-color: ${lighten(0.4, theme.brand.primary)};
        margin: 0px;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      `}
    />
  )
}

export default Divider
