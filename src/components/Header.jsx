import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class Header extends React.Component{
  render() {
    return (
      <div>
        <Breadcrumb>
         <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">
           Library
            </Breadcrumb.Item>
          <Breadcrumb.Item >Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
export default Header
