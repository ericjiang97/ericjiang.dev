import React from 'react'
import css from '@emotion/css'
import theme from '../../config/theme'
import styled from '@emotion/styled'
import GeneralUtils from '../utils/GeneralUtils'

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
    })
  }
  render() {
    const { to, heading, subheading, backgroundImg, textColor } = this.props
    return (
      <a
        href={to}
        css={css`
          padding: 0px;
          margin: 2px;
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
                font-weight: 500;
                margin-top: 5px;
              `}
            >
              {heading}
            </h1>
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
          </div>
          {backgroundImg && <img src={backgroundImg} />}
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
