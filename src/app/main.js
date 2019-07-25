// used to navigate between components and different urls 
import React from 'react';
import Home from './home/home';
import { Switch, Route } from 'react-router-dom';


function Main (){
  return (
    <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
  );
}
export default Main