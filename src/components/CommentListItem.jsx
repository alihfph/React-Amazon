import React, { Component } from 'react'
import {Button, FormControl} from 'react-bootstrap'
export default class CommentListItem extends Component {
   
  state ={
    isEditting: false,
    rate: 0,
    comment: ""
  }
      
      deleteComment = async ()=>{
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.comments._id, {
      method: "DELETE",
      headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTc1NzQxNDQsImV4cCI6MTYxODc4Mzc0NH0.MviRubLP9zvIhFuKQr8AuWvbW4ZUc-pIv0sRhdifT6Q"
      }
      
      })
      if (resp.ok){
        this.props.deleteComment(this.props.comments._id)

      }
  }

  setEdit = ()=>{
    this.setState({
      isEditting: !this.state.isEditting
    })
  }   
  
  upDateComment = async ()=>{
    const toSend = {
      rate: this.state.rate,
      comment: this.state.comment
    }
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.comments._id , {
      method: "PUT",
      body: JSON.stringify(toSend),
      headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZWJkYjg5YzI2ZjAwMTU3ZjljMjkiLCJpYXQiOjE2MTc1NzQxNDQsImV4cCI6MTYxODc4Mzc0NH0.MviRubLP9zvIhFuKQr8AuWvbW4ZUc-pIv0sRhdifT6Q"
      }
      
      })
      if (resp.ok){
        this.setState({
          isEditting: false
        })
        this.props.upDateComment(this.props.comments._id)

      }
  }

  render() {
    return (
      <li>
         { this.state.isEditting ? 
         <> 
            <FormControl value ={this.state.rate}
              type="number"
              onChange = {(e) => {this.setState({rate:e.currentTarget.value})}}></FormControl> 
            <FormControl value ={this.state.comment}
              placeHolder = "write Comment"
              onChange = {(e) => {this.setState({comment:e.currentTarget.value})}}></FormControl>
            <Button variant="secondary" onClick={this.upDateComment}>Update</Button>
           </>
           : <> {this.props.comments.comment} - {this.props.comments.rate}</>}
          <Button variant="secondary" onClick={this.setEdit}>Edit</Button>
          <Button variant="danger" onClick={this.deleteComment}>Delete</Button>
      </li>
    )
  }
}
