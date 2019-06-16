import React from 'react'

import css from '@emotion/css'
import theme from '../../config/theme'
import Link from './Link'

export default function Repository({
  color = `${theme.colors.body_color}`,
  url = 'https://google.com',
  projectTitle = 'Project Title',
  projectDescription = 'Lorem ipsum dolar',
}) {
  return (
    <div
      css={css`
        padding: 10px;
        border: 1px solid black;
        margin: 5px;
        background-color: ${theme.colors.white};
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <svg
          class="octicon octicon-repo mr-2 text-gray"
          viewBox="0 0 12 16"
          version="1.1"
          width="12"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
          />
        </svg>
        <div
          css={css`
            margin-left: 10px;
          `}
        >
          <Link
            to={url}
            css={css`
              margin-left: 10px;
              color: ${color};
              :hover {
                color: ${theme.brand.primary};
              }
            `}
            aria-label="Visit my GitHub"
          >
            <span>{projectTitle}</span>
          </Link>
        </div>
      </div>
      <div>
        <p
          css={css`
            font-size: 15px;
            font-weight: 300;
          `}
        >
          {projectDescription}
        </p>
      </div>
    </div>
  )
}
