import React, { Component } from 'react'
import './Page.scss';
import SideMenu from '../SideMenu/SideMenu';


export default class Page extends Component {
    render() {
        return (
            <div className='u8-wrap'>
                <SideMenu />
            </div>
        )
    }
}
