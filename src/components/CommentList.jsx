import React, { Component } from 'react'
import CommentListItem from './CommentListItem.jsx'
import CommentCreat from './CommentCreat.jsx'
import { FormControl} from 'react-bootstrap'

export default class CommentList extends Component {
  state ={
    commentFilter: ""
    
  }
  render() {
    return (
      <div>
      <FormControl value ={this.state.commentFilter} 
      onChange = {(e) => {
        this.setState({commentFilter:e.currentTarget.value.toLowerCase()})
        
        }}>
    
      </FormControl>
       <ul>
         {this.props.comments && this.props.comments
         .filter(comment=> comment.comment.toLowerCase().indexOf(this.state.commentFilter) !== -1)
         .map(comment=>
         <CommentListItem key={comment._id} comments ={comment} deleteComment={this.props.deleteComment} upDateComment={this.props.upDateComment} />
         )}
       </ul>
       <CommentCreat bookId={this.props.bookId} onNewComment={this.props.onNewComment}/>
        
      </div>
    )
  }
}
