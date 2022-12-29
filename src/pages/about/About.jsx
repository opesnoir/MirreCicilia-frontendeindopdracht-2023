import React from 'react';
import styles from './About.module.css';
import imgSheep from '../../assets/aboutme-sheep-pexels-arthur-swiffen-12550240.jpg'

const About = () => {
    return (
        <>
            <section>
                <div className={styles.aboutOuterContainer}>
                    <div className={styles.aboutInnerContainer}>
                        <div>
                            <h1 className={styles.aboutTitel}>Over mij</h1>
                        </div>
                        <div>
                            <p className={styles.aboutTekst}>“Uw woord is een lamp voor mijn voet, en een licht op mijn pad.” (Psalm 119:105). Dat
                                schreef David om het woord van de HEERE te omschrijven. Voor mij betekent Gods woord
                                hetzelfde. Daarom heb ik ervoor gekozen voor mijn afstudeer opdracht deze
                                Bijbelapplicatie te bouwen.</p>
                            <p className={styles.aboutTekst}>Mijn geloof in JHWH vormt het fundament van mijn bestaan en Zijn woord is mijn morele
                                kompas. Ik hoop dan ook dat de Bijbel jou net zo zal inspireren en dat het een licht
                                voor jouw voeten mag zijn.</p>
                            <p className={styles.aboutNaam}>Mirre</p>
                        </div>
                    </div>
                </div>
            </section>
            <img src={imgSheep} alt="Afbeelding van een Schaap" className={styles.aboutImg}/>
        </>
    );
};

export default About;
