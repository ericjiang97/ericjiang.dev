import React from 'react'
import css from '@emotion/css'
import { lighten } from 'polished'

import theme from '../../../config/theme'

const ProjectCard = ({ title }) => {
  return (
    <div
      css={css`
        flex: 1;
        max-width: 30%;
        background-color: ${lighten(0.05, theme.brand.primary)};
        padding: 5px 15px;
        margin: 5px;
      `}
    >
      <h3
        css={css`
          color: white;
          margin: 10px;
        `}
      >
        {title}
      </h3>
    </div>
  )
}

export default ProjectCard
