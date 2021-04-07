import React from 'react';
// import Header from './components/Header.jsx' 
import BookList from './components/BookList.jsx'
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import BookDetailspagepage from './components/BookDetailpage.jsx';

function App() {
  return (
  <Router>
   <Container>
     <Link to="/details/:asin"> Go  to details Page</Link>
       <Switch>
          <Route path="/details/:asin">
            <BookDetailspagepage />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
          <BookList text="Hello World "/>
          </Route>
        </Switch>
     {/* <div>
       <Header />
       
     </div> */}
   </Container>
  </Router>
  );
}

export default App;
