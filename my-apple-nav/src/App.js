import React from 'react';
import { Route, Switch } from 'react-router';
import NavPage from './NavPage';
import './App.css';


const FourOhFour = () => {
  return (
    <div>
    <h1>`Oops! You've reached a page that doesn't exist. You've been 404'd!`</h1>
    </div>
  )
}


const App = () =>{
  return (
    <div className="App">
   
      <Switch>
        <Route exact path = '/' component = {NavPage} />
        <Route component = {FourOhFour} />
      </Switch>
      
    </div>
  );
}

export default App;

  
    
