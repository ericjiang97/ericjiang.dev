import React from 'react'
import css from '@emotion/css'
import { lighten, rgb } from 'polished'

import theme from '../../../config/theme'

const FeaturedProject = ({ title, img }) => {
  return (
    <>
      <div
        css={css`
          flex: 1;
          min-width: 100%;
        `}
      >
        <img
          src={img}
          css={css`
            z-index: 2;
            width: 75%;
            margin-left: 25%;
          `}
        />
        <div
          css={css`
            position: relative;
            padding: 5px 15px;
            margin: 5px;
            background-color: ${lighten(0.05, theme.brand.primary)};
            opacity: 0.9;
            z-index: 3;
            top: -50%;
            width: 75%;
            height: 50%;
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
      </div>
    </>
  )
}

export default FeaturedProject
