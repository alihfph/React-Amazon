import React from 'react';
import Header from './components/Header.jsx' 
import BookList from './components/BookList.jsx'
import Container from 'react-bootstrap/Container'
import './App.css';

function App() {
  return (
   <Container>
     <div>
       <Header />
       <BookList text="Hello World "/>
     </div>
   </Container>
  );
}

export default App;
