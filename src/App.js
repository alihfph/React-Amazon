import React from 'react';
import Header from './components/Header.jsx' 
import BookList from './components/BookList.jsx'
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import BookDetailspagepage from './components/BookDetailpage.jsx';

function App() {
  return (
  <Router>
   <Container>
     {/* <Link to="/details/:asin"> Go  to details Page</Link> */}
     <Header />
       <Switch>
          <Route path="/details/:asin">
            <BookDetailspagepage />
          </Route>
          <Route path="/home">
          <BookList text="Hello World "/>
          </Route>
          <Route path ="/register">
            <h1>No Registration</h1>
          </Route>
          <Route path ="/data">
            <h1>No Data Available</h1>
          </Route>
          
        
          
      
        </Switch>
    </Container>
  </Router>
  );
}

export default App;
