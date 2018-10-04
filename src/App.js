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
    }
    this.bookSearchQuery = this.bookSearchQuery.bind(this)
    this.bookStatusUpdate = this.bookStatusUpdate.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  bookStatusUpdate(book, shelf) {
    BooksAPI.getAll(book, shelf).then((res) => {
      this.getAllBooks()
    })
  }

  bookSearchQuery(book) {
    BooksAPI.search().then((book) => {
      this.setState((currentState) => ({
        books: currentState.books.concat([book])
      }))
    })
  }


  render() {
    // console.log('BOOKS', BooksAPI.getAll())
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <BookSearch onBookSearch={(book) => {
            this.bookSearchQuery(book)
            history.push('/')
          }}/>
          )}
        />
        <Route exact path='/' render={({ history }) => (
          <BookList
            books={this.state.books}
            // updateBook={this.bookStatusUpdate}
          />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
