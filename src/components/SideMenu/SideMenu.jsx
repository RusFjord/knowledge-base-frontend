import React, { Component } from 'react';
import './SideMenu.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { getSideMenu } from './SideMenuServer';


export default class SideMenu extends Component {

    constructor(props) {
        super(props); 
        this.state = { isOpen: false };
    }

    toggleMenu = () => {

        console.log(this.state);

        this.setState({isOpen: !this.state.isOpen})
    }

    render() {

        let sideMenuItems = getSideMenu();

        let items = sideMenuItems.map((item, index) => {
            return (
                <li className="u8-menu-item u8-full-menu" key={index}>
                    {item.icon}
                    <span>{(this.state.isOpen) ? item.text : ''}</span></li>
            )

        });

        return (
            <div className="sidebar-sticky" id="u8-sidebar">
            <ul className="u8-menu">
                <li className="u8-menu-item text-right u8-open-close-sidebar" onClick={this.toggleMenu}>
                    { 
                        (this.state.isOpen) ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight} />
                    }
                </li>
                {items}
            </ul>
        </div>
        )
    }
}
