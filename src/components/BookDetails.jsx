import React, { Component } from 'react';
import { Row, Col,Badge} from 'react-bootstrap';
import CommentList from './CommentList.jsx'



class BookDetails extends Component {
  state ={
    comments:[]
  }
  render() {
    return (
      <Row>
        {this.props.book ?
        <>
        <Col md={6}>
          <image src={this.props.book.img} flueid />
        </Col>
        <Col md={6}>
         <h1>
           {this.props.book.title}<Badge variant="secondary">{this.props.book.category}</Badge><Badge variant="warning">{this.props.book.price}</Badge>
         </h1>
        <CommentList comments ={this.state.comments} 
         bookId={this.props.book.asin} 
         onNewComment={this.onNewComment} 
         deleteComment={this.deleteComment} 
         upDateComment={this.upDateComment}
         />
        </Col>
       
        </>:
        <div>click here</div>
        }
      </Row>
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


  componentDidMount = async ()=>{
    if(this.props.book) {
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
  else{
    console.log("component did mount")
  }
  }

}





export default BookDetails;
