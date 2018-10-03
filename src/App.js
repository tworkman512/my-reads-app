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
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  // bookSearchQuery(book) {
  //   BooksAPI.search().then((books) => {
  //     this.setState(() => ({
  //       books
  //     }))
  //   })
  // }

  render() {
    // console.log('BOOKS', BooksAPI.getAll())
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <BookSearch />
          )}
        />
        <Route exact path='/' render={({ history }) => (
          <BookList books={this.state.books} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
