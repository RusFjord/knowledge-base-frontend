import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './Page.scss';
import SideMenu from '../SideMenu/SideMenu';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';


export default class Page extends Component {
    render() {
        return (
            <div className='u8-wrap'>
                <SideMenu />
                <div >
                    <Switch>
                        <Route exact path = '/' component={Dashboard} />
                        <Route path = '/login' component={Login} />
                    </Switch>
                </div>
            </div>
        )
    }
}
