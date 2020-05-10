import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../home/home'
import Todo from '../todo/todo'
//import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home} />
        <Route path='/todos' component={Todo} />
        <Redirect from='*' to='/home' />
    </Router>
)