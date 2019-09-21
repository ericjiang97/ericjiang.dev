import React, { useState } from 'react'
import Remark from 'react-markdown'
import css from '@emotion/css'
import theme from '../../config/theme'
import CompanyLabel from './CompanyLabel'

const PreviousExperienceContainer = ({ experiences = [] }) => {
  const [openPanel, setOpenPanel] = useState(0)

  const selectedExperience = experiences[openPanel]
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      `}
    >
      <div
        css={css`
          margin-right: 1.25rem;
        `}
      >
        {experiences.map((experience, key) => {
          return (
            <CompanyLabel
              selected={key === openPanel}
              onClick={() => setOpenPanel(key)}
            >
              {experience.company}
            </CompanyLabel>
          )
        })}
      </div>
      <div
        css={css`
          padding: 0.75rem 2rem;
          flex: 1;
          border-left: 1px solid ${theme.colors.green};
        `}
      >
        <h3
          css={css`
            margin: 0px;
            margin-bottom: 0.25rem;
            color: white;
            font-size: 0.85rem;
          `}
        >
          {selectedExperience.company}
        </h3>
        <h2
          css={css`
            margin: 0px;
            margin-bottom: 0.25rem;
            color: white;
            font-size: 1.25rem;
          `}
        >
          {selectedExperience.role}
        </h2>
        <h4
          css={css`
            margin: 0px;
            margin-bottom: 0.65rem;
            color: white;
            font-size: 0.85rem;
          `}
        >
          {selectedExperience.dates}
        </h4>
        <Remark
          source={selectedExperience.description}
          css={css`
            font-size: 0.95rem;
          `}
        />
      </div>
    </div>
  )
}

export default PreviousExperienceContainer
