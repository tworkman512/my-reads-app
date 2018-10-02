import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import BookSearch from './components/BookSearch'
import BookList from './components/BookList'
import './assets/styles/App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  render() {
    // console.log('BOOKS', BooksAPI.getAll())
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <BookSearch />
          )}
        />
        <Route exact path='/' render={({ history }) => (
          <BookList />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
