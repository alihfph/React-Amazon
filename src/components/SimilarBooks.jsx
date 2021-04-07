import React, { Component } from 'react'
import BookListItem from "./BookListItem.jsx"

export default class SimilarBooks extends Component {
  render() {
    return (
      <>
      {this.props.book && this.props.book.map(book=> <BookListItem bookInfo={book} />)}
        
      </>
    )
  }
}
