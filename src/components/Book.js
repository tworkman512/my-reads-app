import React, { PureComponent } from 'react'

export default class Book extends PureComponent {

  render() {
    const { book, updateBook, bookTitle, bookAuthor, bookImage } = this.props
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={
                bookImage === undefined
                ? { width: 128, height: 193, backgroundImage: 'none', backgroundColor: '#F5F5F5' }
                : { width: 128, height: 193, backgroundImage: `url(${bookImage.thumbnail})` }
              }
            >
            </div>
            <div className="book-shelf-changer">
              <select defaultValue={book.shelf}
								onChange={(event) => updateBook(book, event.target.value)}>
								<option value="none" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
            </div>
          </div>
          <div className="book-title">{bookTitle}</div>
          <div className="book-authors">{bookAuthor}</div>
        </div>
      </div>
    )
  }
}
