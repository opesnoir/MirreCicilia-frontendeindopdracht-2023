import React from 'react';
import styles from './NotFound.module.css';
import imgRam from '../../assets/pagenotfound-ram-pexels-johannes-havn-3218340-2.jpg';
import {useNavigate} from "react-router-dom";

const NotFound = () => {

/*    const navigate = useNavigate()
    setTimeout(() => {
        navigate(-1)
    }, 3000)*/

    return (
        <>
            <section>
                <div className={styles.notFoundOuterContainer} >
                    <div className={styles.notFoundInnerContainer}>
                        <div>
                            <h1 className={styles.title}><span className={styles.title404}>404|</span>Pagina niet gevonden</h1>
                        </div>
                        <div>
                            <p className={styles.text}>De pagina die je zoekt bestaat niet. Je wordt binnen 3 seconden teruggestuurd naar de
                                vorige pagina.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <img className={styles.imgRam} src={imgRam} alt="Afbeelding van een Ram"/>
            </div>
        </>
    );
};

export default NotFound;