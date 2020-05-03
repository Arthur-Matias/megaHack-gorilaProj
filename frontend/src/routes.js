import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Registro from './pages/Registro';
import MainList from './pages/MainList';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Registro}/>
                <Route path="/listDashboard" component={MainList}/>
            </Switch>
        </BrowserRouter>
    )
}