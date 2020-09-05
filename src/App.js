import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import Details from './Component/ListDetails/Details';
import Comment from './Component/Comment/Comment';
function App() {
  return (
    <div className='App'>
      <header>
        <a href="/home">Home</a>
        <a href="/about/:">About</a>
        <a href="/comment/:">Other</a>
      </header>
      <Router>
        <Switch>
          <Route path='/Home'>
          <Home></Home>
          </Route>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route path='/about/:listId'>
            <Details></Details>
          </Route>
          <Route path='/comment/:commentId'>
            <Comment></Comment>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
