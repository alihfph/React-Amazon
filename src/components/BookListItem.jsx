import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class BookListItem extends Component {

  render() {
    const { bookInfo } = this.props
    return (
    <Card className ="col-md-4">
      <Card.Img variant="top" src={bookInfo.img} onClick={()=>this.props.onBookSelected(bookInfo)}/>
        <Card.Body>
        <Card.Title>
        <Link to={"/details/"+ bookInfo.asin}>
        {bookInfo.title}</Link> </Card.Title>
         <Card.Text>
          {bookInfo.category}
         </Card.Text>
      </Card.Body>
    </Card>
    )
  }
  
  
}