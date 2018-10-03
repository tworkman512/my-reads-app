import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Book'

export default class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookShelfTitle: PropTypes.string.isRequired,
  }

  render() {
    // const { books } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Books />
            </li>
          </ol>
        </div>
      </div>
    )
  }
}
