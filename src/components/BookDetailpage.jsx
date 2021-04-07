import React, { Component } from 'react';
import { Row, Col,Badge, Image} from 'react-bootstrap';
import CommentList from './CommentList.jsx'
import {withRouter} from 'react-router-dom'
import SimilarBooks from './SimilarBooks.jsx'



class BookDetailspagepage extends Component {
  state ={
    comments:[],
    book : undefined
  }
  render() {
    const {book} = this.state
    return (
    <>
      <Row>
        {book ?
        <>
        <Col md={6}>
          <Image src={book.img} alt="friend pics" fluid/>
        </Col>
        <Col md={6}>
         <h1>
           {book.title}<Badge variant="secondary">{book.category}</Badge><Badge variant="warning">{book.price}</Badge>
         </h1>
        <CommentList comments ={this.state.comments} 
         bookId={book.asin} 
         onNewComment={this.onNewComment} 
         deleteComment={this.deleteComment} 
         upDateComment={this.upDateComment}
         />
        </Col>
       
        </>:
        <div>Looding...!</div>
        }
      </Row>
      <Row>
        <SimilarBooks book={this.state.similarbooks}/>
      </Row>
    </>
    );
  }
  
  upDateComment=(uptoDateComment)=>{
    const commentsRef = this.state.comments
    const toUpdate = commentsRef.map(x=>x._id).indexOf(uptoDateComment._id)
    commentsRef[toUpdate] = uptoDateComment
    this.setState({
      comments: commentsRef
    })

  }

  onNewComment = (newComment) => {
    this.setState({
      comments:[...this.state.comments, newComment]
    })
  }

  deleteComment= (commentId) => {
    this.setState({
      comments:this.state.comments.filter(comment=>comment._id !== commentId)
    })

  }
  // componentDidUpdate = async (prevProps, prevState, snapshot)=>{
  //   if(this.props.book &&  (!prevProps.book || (prevProps.book.asin !== this.props.book.asin))){
  //   const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin, {
  //     headers: {
  //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTc1NzQxNDQsImV4cCI6MTYxODc4Mzc0NH0.MviRubLP9zvIhFuKQr8AuWvbW4ZUc-pIv0sRhdifT6Q"
  //     }
  //     })
    
  //     const comments = await resp.json()
  //     console.log(comments)
  //     this.setState({
  //       comments:comments
  //     })
    
  // }
  // }
  // componentDidUpdate= async (prevProps, prevState, snapshot)=>{
  //   if(this.props.book &&  (!prevProps.book || (prevProps.book.asin !== this.props.boon.asin))){
  //    const resp= await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin, {
  //     headers: {
  //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTc1NzQxNDQsImV4cCI6MTYxODc4Mzc0NH0.MviRubLP9zvIhFuKQr8AuWvbW4ZUc-pIv0sRhdifT6Q"
  //     }
  //     }
  //     )
  //   }
  //     const comments = await resp.json()
  //     console.log(comments)
  //     this.setState({
  //       comments:comments
  //     })
  // }
  componentDidMount = async ()=>{
    console.log(this.props)
    const asin = this.props.match.params.asin
    
    const respComment = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTc1NzQxNDQsImV4cCI6MTYxODc4Mzc0NH0.MviRubLP9zvIhFuKQr8AuWvbW4ZUc-pIv0sRhdifT6Q"
      }
      })
    if (respComment.ok){
      const comments = await respComment.json()
      const resp = await fetch("https://striveschool-api.herokuapp.com/books", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTc1NzQxNDQsImV4cCI6MTYxODc4Mzc0NH0.MviRubLP9zvIhFuKQr8AuWvbW4ZUc-pIv0sRhdifT6Q"
        }
        })
        let book = undefined
        let similarbooks = []
      if (resp.ok){
        const books = await resp.json()
        const book =books.find(b=> b.asin === asin)
        similarbooks =books.filter(b=> b.asin === book.category).slice(0,7)
        console.log(books)
        this.setState({
          books:books,
          book:book
        })
      }
      console.log(comments)
      this.setState({
        comments:comments
      })
    
  }

}
}


export default withRouter(BookDetailspagepage)
