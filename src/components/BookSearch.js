import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Library from './Library'

export default class BookSearch extends Component {
  static propTypes = {
    onBookSearch: PropTypes.func.isRequired,
  }

  render() {
    const { bookResults } = this.props
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
              onChange={(event) => this.props.onBookSearch(event.target.value)}
            />
          </div>
        </div>
        <Library
          bookResults={bookResults}
        />
      </div>
    )
  }
}
