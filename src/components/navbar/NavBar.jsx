import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import JubileeLogo from '../../assets/JubileeBibleApp-transparant.png';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineSearch} from "react-icons/ai";

const NavBar = ({auth}) => {

    const navLink = ({isActive}) => isActive
        ? 'active-link'
        : 'default-link'

    return (
        <>
            <nav>
                <div className={styles.navBarContainer}>
                    <ul>
                        <li><NavLink to="/" className={navLink}>Home</NavLink></li>
                        <li><NavLink to="/about" className={navLink}>Over</NavLink></li>
                        <img src={JubileeLogo} alt="Jubilee BibleApp Logo" className={styles.navBarLogo}/>
                        <li><NavLink to="/register" className={navLink}> <AiOutlineUser/> Registreer / Login</NavLink></li>
                        <li><NavLink to="/search" className={navLink}> <AiOutlineSearch/> Zoek</NavLink></li>
                        {auth && <li><NavLink to="/profile">Profielpagina</NavLink></li>}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;