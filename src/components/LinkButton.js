import React from 'react'
import css from '@emotion/css'
import theme from '../../config/theme'
import GeneralUtils from '../utils/GeneralUtils'
import { lighten } from 'polished'

class LinkButton extends React.Component {
  getInternalDivStyles = () => {
    const { backgroundColor } = this.props
    // This function was sourced from
    // https://css-tricks.com/snippets/javascript/lighten-darken-color/
    return css({
      height: 250,
      width: 250,
      minHeight: 250,
      minWidth: 250,
      padding: '5px 10px 5px 10px',
      backgroundColor: backgroundColor,
      display: 'flex',
      flexDirection: 'column',
      ':hover': {
        backgroundColor: GeneralUtils.colorLightenDarken(backgroundColor, 20),
      },
      borderRadius: 10,
      boxShadow: `5px 5px ${lighten(0.2, backgroundColor)}`,
    })
  }
  render() {
    const { to, heading, subheading, backgroundImg, textColor } = this.props
    return (
      <a
        href={to}
        css={css`
          padding: 0px;
          margin: 8px;
        `}
      >
        <div css={this.getInternalDivStyles()}>
          <div
            css={css`
              flex: 1;
            `}
          >
            <h1
              css={css`
                color: ${textColor};
                font-weight: 300;
                margin-top: 5px;
              `}
            >
              {heading}
            </h1>
            {subheading && (
              <p
                css={css`
                  color: ${textColor};
                  font-weight: 300;
                  margin-top: 5px;
                  font-size: 1em;
                `}
              >
                {subheading}
              </p>
            )}
          </div>
          {backgroundImg && <img src={backgroundImg} alt="" width="80%" />}
        </div>
      </a>
    )
  }
}

export default LinkButton

LinkButton.defaultProps = {
  textColor: '#fff',
  backgroundColor: theme.brand.primary,
  subheading: '',
}
