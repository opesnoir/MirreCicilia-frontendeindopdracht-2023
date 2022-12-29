import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Footer.module.css';
import {FiFacebook} from 'react-icons/fi';
import {FiInstagram} from 'react-icons/fi';
import {FaTwitter} from 'react-icons/fa';
import {FaPinterest} from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className={styles.footerOuterContainer}>
                <div>
                    <p>Meer informatie:</p>
                    <Link to="/about" className={styles.footerLink}> Jubilee BibleApp </Link>
                </div>
                <div className={styles.footerIcons}>
                    <p> Bezoek: <FiFacebook/> <FiInstagram/> <FaTwitter/> <FaPinterest/>   </p>
                    <p className={styles.footerItemYear}> &copy; 2023 </p>
                </div>

            </div>
        </>
    );
};

export default Footer;
