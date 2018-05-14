import React from 'react';
import { Route, Switch } from 'react-router';
import NavPage from './NavPage';
import './App.css';


const FourOhFour = () => {
  return (
    `Oops! You've reached a page that doesn't exist. You've been 404'd!`
  )
}


const App = () =>{
  return (
    <div className="App">
   
      <Switch>
        <Route exact path = '/' component = {NavPage} />
        <Route component = {FourOhFour} />
        <Route />
      </Switch>
      
    </div>
  );
}

export default App;

  
    
