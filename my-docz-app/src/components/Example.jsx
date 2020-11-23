import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
}

export const Example = ({ children, kind, ...rest }) => (
  <div
    style={{
      padding: 20,
      background: 'white',
      borderRadius: 3,
      color: 'white',
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
)

Example.propTypes = {
  /**
   * The kind prop is used to set the Example's background color
   */
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
}

Example.defaultProps = {
  kind: 'info',
}
