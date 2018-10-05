import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import BookSearch from './components/BookSearch'
import BookList from './components/BookList'
import './assets/styles/App.css'

class BooksApp extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      bookResults: [],
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  // getAllBooks() {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({books})
  //   })
  // }
  //
  // bookStatusUpdate(book, shelf) {
  //   BooksAPI.getAll(book, shelf).then((res) => {
  //     this.getAllBooks()
  //   })
  // }

  // bookSearch = (query, maxResults) => {
  //   // if nothing is searched then remove the book thumbnails
  //   query.length === 0 && this.setState({bookResults: []})
  //
  //   query.length > 0 &&
  // }

  onBookSearch = (query, maxResults) => {
    // if nothing is searched then remove the book thumbnails
    query.length === 0 && this.setState({bookResults: []})

    query.length > 0 && BooksAPI.search(query, maxResults).then(bookSearched => {
      if(!bookSearched.error) {
        bookSearched.forEach((bookSearch) => {
          let unmatched = this.state.books.filter(book => book.id !== bookSearch.id)
          let matched = this.state.books.filter(book => book.id === bookSearch.id)

          if (matched.length > 0) {
            return bookSearch.shelf = matched[0].shelf
          }
          if (unmatched.length > 0) {
            return bookSearch.shelf = 'none'
          }
        })
      }

      bookSearched.error
      || bookSearched
      === undefined
      ? (this.setState({ bookResults: [] }))
      : (this.setState({ bookResults: bookSearched }))
    })
  }

  render() {
    const { books, bookResults } = this.state
    // console.log('BOOKS', BooksAPI.getAll())
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <BookSearch
            onBookSearch={this.onBookSearch}
            books={books}
            bookResults={bookResults}
          />
          )}
        />
        <Route exact path='/' render={({ history }) => (
          <BookList
            books={books}
            bookResults={bookResults}
            // updateBook={this.bookStatusUpdate}
          />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
