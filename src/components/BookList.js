import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import OpenSearch from './OpenSearch'

export default class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {
    const { books } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              bookShelfTitle="Currently Reading"
              books={ books }
            />
            <BookShelf
              bookShelfTitle="Want to Read"
              books={ books }
            />
            <BookShelf
              bookShelfTitle="Read"
              books={ books }
            />
          </div>
        </div>
        <OpenSearch />
      </div>
    )
  }
}
