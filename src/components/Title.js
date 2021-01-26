import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Title.css';


const Title = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Navbar.Brand className="title">
          <h4 className="title">Pokémon Search</h4>
        </Navbar.Brand>
      </Navbar>
    </div>
  )
};


export default Title