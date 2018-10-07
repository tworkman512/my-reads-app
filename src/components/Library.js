import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default class Library extends Component {
static propTypes = {
  bookResults: PropTypes.array.isRequired,
}

render() {
  const { bookResults, updateBook } = this.props
  console.log('BOOK RESULTS', bookResults)
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {bookResults.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              bookImage={book.imageLinks.smallThumbnail}
              bookTitle={book.title}
              bookAuthor={book.author}
              updateBook={updateBook}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}
}
