import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <Details path="product/:_id"/>
        <Update path="product/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;