import React from 'react';
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.header}>
            <img className={`${header.header} ${header.img}`} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnFkDY8qc5R3viQtfYYkLHq4PnxZT94Fg3g&usqp=CAU'/>
        </header>
    )
}

export default Header;