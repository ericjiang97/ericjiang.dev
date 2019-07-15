import React from 'react'
import css from '@emotion/css'

export default function Photo({ src }) {
  return (
    <div
      css={css`
        background-image: url(${src});
        background-size: cover;
        background-repeat: none;
        width: 100%;
        min-width: 600px;
        min-height: 600px;
      `}
    >
      Hello World!
    </div>
  )
}
