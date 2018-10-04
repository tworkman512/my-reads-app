import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Book extends Component {
  render() {
    // console.log('Props', this.props)
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
