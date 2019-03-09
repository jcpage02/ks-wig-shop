import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
    </Switch>
)