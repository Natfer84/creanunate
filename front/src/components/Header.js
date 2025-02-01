import React from 'react';
import '../styles/Header.css';
import Logo from './Logo';
import Courses from "../pages/Courses.js" 

export default function Header() {

    return (
        <header className="Header_box">
            <Logo />
            <Courses />
        </header>
    )
}