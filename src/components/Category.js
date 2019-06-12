import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

Category.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default Category
