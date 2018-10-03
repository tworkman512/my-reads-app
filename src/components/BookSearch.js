import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BookSearch extends Component {
  constructor() {
    super()
    this.state = {
      bookSearch: [],
    }
    this.bookSearch = this.bookSearch.bind(this)
  }

  bookSearch(bookSearch) {
    this.setState(() => ({
      bookSearch: bookSearch.trim()
    }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}
