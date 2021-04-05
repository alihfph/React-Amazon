import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentList from './CommentList'
export default class BookListItem extends Component {
  state ={
    comments:[]
  }
  render() {
    return (
    <Card className ="col-md-4">
      <Card.Img variant="top" src={this.props.bookInfo.img}/>
        <Card.Body>
        <Card.Title>{this.props.bookInfo.title}</Card.Title>
         <Card.Text>
          {this.props.bookInfo.category}
         </Card.Text>
         <CommentList comments ={this.state.comments} 
         bookId={this.props.bookInfo.asin} onNewComment={this.onNewComment} deleteComment={this.deleteComment} upDateComment={this.upDateComment}
         />
      </Card.Body>
    </Card>
    )
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
  componentDidMount = async ()=>{
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookInfo.asin, {
      headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTc1NzQxNDQsImV4cCI6MTYxODc4Mzc0NH0.MviRubLP9zvIhFuKQr8AuWvbW4ZUc-pIv0sRhdifT6Q"
      }
      })
    if (resp.ok){
      const comments = await resp.json()
      console.log(comments)
      this.setState({
        comments:comments
      })
    }
  }
}
