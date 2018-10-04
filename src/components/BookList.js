import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import OpenSearchButton from './OpenSearchButton'

export default class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {
    const { books } = this.props
    console.log('LOOK HERE', books)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              bookShelfTitle="Currently Reading"
              books={ books.filter(book => book.shelf === 'currentlyReading') }
            />
            <BookShelf
              bookShelfTitle="Want to Read"
              books={ books.filter(book => book.shelf === 'wantToRead') }
            />
            <BookShelf
              bookShelfTitle="Read"
              books={ books.filter(book => book.shelf === 'read') }
            />
          </div>
        </div>
        <OpenSearchButton />
      </div>
    )
  }
}
