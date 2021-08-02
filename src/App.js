import React from 'react'
import {BrowserRouter, Route, } from 'react-router-dom'
import NewsList from './components/Newslist';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    //<div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Home} />
       <Route path='/news' component={NewsList} />
       </BrowserRouter>
    
    //</div>
  );
}

export default App;
