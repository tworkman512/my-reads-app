import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import BookShelf from './BookShelf'
import OpenSearchButton from './OpenSearchButton'

export default class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {
    const { books, updateBook } = this.props
    // console.log('LOOK HERE', books)
    // console.log('Props', this.props)
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            <BookShelf
              bookShelfTitle="Currently Reading"
              books={ books.filter(book => book.shelf === 'currentlyReading') }
              updateBook={updateBook}
            />
            <BookShelf
              bookShelfTitle="Want to Read"
              books={ books.filter(book => book.shelf === 'wantToRead') }
              updateBook={updateBook}
            />
            <BookShelf
              bookShelfTitle="Read"
              books={ books.filter(book => book.shelf === 'read') }
              updateBook={updateBook}
            />
          </div>
        </div>
        <OpenSearchButton />
      </div>
    )
  }
}
