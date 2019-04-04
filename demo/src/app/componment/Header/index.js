import React from 'react'
import NavBar from '../NavigationBar'
import { a, b, c } from './navList'
import 'bulma/css/bulma.css'

const logo = require('../../../asset/awx-logo-white.svg')


class Header extends React.Component {
    render() {
        const navlist = [a, b, c]
        return (
            <header>
                <NavBar>
                    <img src={logo} />
                    <nav class="navbar">
                        {navlist.map(l => <div style={{ margin: 7 }}>{l.name}</div>)}
                    </nav>
                    <span>1</span>
                </NavBar>
            </header>
        )
    }
}

export default Header