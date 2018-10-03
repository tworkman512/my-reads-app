import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Book extends Component {
  // static propTypes = {
  //   // books: PropTypes.array.isRequired,
  //   // bookImage: PropTypes.array.isRequired,
  //   // bookTitle: PropTypes.string.isRequired,
  //   // bookAuthor: PropTypes.string.isRequired,
  // }



  render() {
    // const { books } = this.props
    // console.log('LOOK HERE', books)
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookImage})` }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.bookAuthor}</div>
        </div>
      </div>
    )
  }
}
