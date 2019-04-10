import React from 'react';
import { Route, Switch  } from 'react-router-dom';

import Home from '../page/home/index.js';
import Profile from '../page/profile/index.js';

const News = () => {
  return (
    <div>11111</div>
  )
}

export default class Router extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </>
    )
  }
}