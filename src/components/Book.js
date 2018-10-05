import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

export default class Book extends Component {
  // static propTypes = {
  //   // books: PropTypes.array.isRequired,
  //   // bookImage: PropTypes.array.isRequired,
  //   // bookTitle: PropTypes.string.isRequired,
  //   // bookAuthor: PropTypes.string.isRequired,
  // }

  render() {
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookImage})` }}></div>
            <BookShelfChanger />
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.bookAuthor}</div>
        </div>
      </div>
    )
  }
}
