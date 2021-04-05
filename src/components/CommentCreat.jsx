import React, { Component } from 'react'
import {FormControl, Button} from 'react-bootstrap'

export default class CommentCreat extends Component {
  state ={
    rate: 0,
    comment: ""
  }
  sendComment = async ()=>{
    const toSend = {
      rate: this.state.rate,
      comment: this.state.comment,
      elementId: this.props.bookId
    }
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(toSend),
      headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTc1NzQxNDQsImV4cCI6MTYxODc4Mzc0NH0.MviRubLP9zvIhFuKQr8AuWvbW4ZUc-pIv0sRhdifT6Q"
      }
      
      })
      if (resp.ok){
        this.props.onNewComment(await resp.json())

      }
  }


  render() {
    return (
      <div>
       <FormControl value ={this.state.rate}
         placeHolder = "write Comment"
        type="number"
        onChange = {(e) => {
        this.setState({rate:e.currentTarget.value})
        }}></FormControl>

        <FormControl value ={this.state.comment}
        placeHolder = "write Comment"
        onChange = {(e) => {
        this.setState({comment:e.currentTarget.value})
        }}></FormControl>
        <Button className="btn primary" onClick= {this.sendComment}> Add Comment

        </Button>
  
        
      </div>
    )
  }
}
