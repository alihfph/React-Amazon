import React, { Component } from 'react'
import BookListItem from './BookListItem'
import { Row , FormControl, Container} from 'react-bootstrap'
import BookDetails from './BookDetails.jsx'

export default class BookList extends Component {
  state = {
    books : [],
    search: "",
    selectedBook: undefined
  }
  render() {
    return (
      <>
       
       <h1>{this.props.text}</h1>
       <FormControl className = "mb-5 mx-5"
          placeholder = "search"
          value = {this.state.search}
          onChange={(e)=> this.setState({ search: e.currentTarget.value.toLowerCase() })}
        ></FormControl> 
        <Container>
        <BookDetails  book={this.state.selectedBook}/>

       <Row>
         {this.state.books
         .filter(book=> book.title.toLowerCase().indexOf(this.state.search) !== -1)
         .map(book=> 
         <BookListItem bookInfo={book} key={book.asin}
         onSearchChange={newSearchValue=> this.setState({search:newSearchValue})}
         onBookSelected={(book)=>this.setState({selectedBook:book})}  
         />)}
       </Row>
       </Container> 
      </>
    )
  }
  componentDidMount = async ()=>{
    const resp = await fetch("https://striveschool-api.herokuapp.com/books?offset=0&limit=50", {
      headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTc1NzQxNDQsImV4cCI6MTYxODc4Mzc0NH0.MviRubLP9zvIhFuKQr8AuWvbW4ZUc-pIv0sRhdifT6Q"
      }
      })
    if (resp.ok){
      const books = await resp.json()
      console.log(books)
      this.setState({
        books:books
      })
    }
  }
}
