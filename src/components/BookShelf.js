import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookShelfTitle: PropTypes.string.isRequired,
  }

  render() {
    const { books } = this.props
    // console.log(books)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  bookImage={ book.imageLinks.smallThumbnail }
                  bookTitle={ book.title }
                  bookAuthor={ book.author }
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
