import React from 'react'
import css from '@emotion/css'

const Backdrop = ({ onClick = () => {} }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 100;
        top: 0;
        left: 0;
      `}
      onClick={onClick}
    />
  )
}

export default Backdrop
