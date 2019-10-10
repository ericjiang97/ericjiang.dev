import React from 'react'
import Remark from 'react-markdown'
import css from '@emotion/css'
import { lighten } from 'polished'

import theme from '../../../config/theme'
import { GitHub, ExternalLinkIcon } from '../Social'

const TechTalkCard = ({ date, title, description, githubUrl, url }) => {
  return (
    <>
      <div
        css={css`
          flex: 1;
          max-width: 33%;
          display: flex;
          min-width: 280px;
        `}
      >
        <div
          css={css`
            flex: 1;
            padding: 5px 15px;
            margin: 5px;
            background-color: ${lighten(0.05, theme.brand.primary)};
            opacity: 0.9;
            z-index: 3;
            :hover {
              background-color: ${lighten(0.1, theme.brand.primary)};
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
            `}
          >
            <div
              css={css`
                flex: 1;
              `}
            >
              <span
                css={css`
                  margin: 0.75rem;
                  font-size: 0.7rem;
                  color: ${lighten(0.8, theme.brand.primary)};
                `}
              >
                {date}
              </span>
              <h3
                css={css`
                  color: white;
                  margin: 0.75rem;
                  margin-top: 0.25rem;
                `}
              >
                {title}
              </h3>
            </div>
            <div>
              {githubUrl && (
                <GitHub
                  color={lighten(0.5, theme.brand.primary)}
                  url={githubUrl}
                  target="_blank"
                />
              )}
              {url && (
                <ExternalLinkIcon
                  color={lighten(0.5, theme.brand.primary)}
                  url={url}
                  target="_blank"
                />
              )}
            </div>
          </div>
          <Remark
            source={description}
            css={css`
              font-size: 0.8em;
              margin: 0.75rem;
            `}
          />
        </div>
      </div>
    </>
  )
}

export default TechTalkCard
