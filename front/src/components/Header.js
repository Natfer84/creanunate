import React from 'react';
import '../styles/Header.css';
import Logo from './Logo';
import Nav from './Nav';


export default function Header() {

    return (
        <header className="Header_box">
            <Logo />
            <Nav />
        </header>
    )
}