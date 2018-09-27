import React from 'react'
import PropTypes from 'prop-types'

export default class Window extends React.Component {
  constructor () {
    super()

    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  handleScroll (event) {
    if (this.props.onScroll) this.props.onScroll(event)
  }

  handleResize (event) {
    if (this.props.onResize) this.props.onResize(event)
  }

  render () {
    return this.props.children
  }

  componentDidMount () {
    if (this.props.onScroll) window.addEventListener('scroll', this.handleScroll)
    if (this.props.onResize) window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    if (this.props.onScroll) window.removeEventListener('scroll', this.handleScroll)
    if (this.props.onResize) window.removeEventListener('resize', this.handleResize)
  }
}

Window.propTypes = {
  onScroll: PropTypes.func,
  onResize: PropTypes.func
}
