// General imports
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../Icon/Icon.jsx'
import styles from './IconButton.module.css'

const IconButton = ({ onClick, className = 'button', icon }) => (
  <button type="button" className={className} onClick={onClick}>
    <Icon name={icon} className={styles.OieToolsIcon} />
    <br />
    {icon}
  </button>
)

// Properties restrictions
IconButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
}
//IconButton.defaultProps = { className: 'button' }

export default IconButton
