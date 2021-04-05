import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
export default class BookListItem extends Component {

  render() {
    return (
    <Card className ="col-md-4">
      <Card.Img variant="top" src={this.props.bookInfo.img} onClick={()=>this.props.onBookSelected(this.props.bookInfo)}/>
        <Card.Body>
        <Card.Title>{this.props.bookInfo.title}</Card.Title>
         <Card.Text>
          {this.props.bookInfo.category}
         </Card.Text>
      </Card.Body>
    </Card>
    )
  }
  
  
}