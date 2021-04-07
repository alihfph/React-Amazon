import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {withRouter, Link } from 'react-router-dom'
class Header extends React.Component{
  render() {
    return (
      <div>
        <Breadcrumb>
         <Breadcrumb.Item href="#"> <Link to="/home">Home</Link> </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
          <Link to="/register">Register</Link>
            </Breadcrumb.Item>
          <Breadcrumb.Item >
          <Link to="/data">Data</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
export default withRouter(Header)
