import React from 'react';
import styles from './Home.module.css';
import TextBox from "../../components/TextBox/TextBox";
import homePomegranateImg from "../../assets/home-pomegranate-pexels-pixabay-65256.jpg";


const Home = () => {
    return (
        <>
            <form></form>

            <TextBox
                src={homePomegranateImg}
                alt="pomegranate"
                title="Bijbelvers van de dag"
            />
            <TextBox
                src={homePomegranateImg}
                alt="pomegranate"
                title="De Bijbel"
                text="Achtergrond informatie"
            >
               <p> "De Bijbel is een liefdesbrief van God aan jou. Het vertelt het verhaal van de schepping ..."  </p>
            </TextBox>
        </>
    );
};

export default Home;