import React from 'react'
import { lighten } from 'polished'
import css from '@emotion/css'

import theme from '../../config/theme'

const CompanyLabel = ({ children, selected = false, onClick = () => {} }) => {
  return (
    <div
      css={css`
        padding: 0.5rem 1.25rem;
        :hover {
          background-color: ${lighten(0.1, theme.brand.primary)};
        }
      `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default CompanyLabel
