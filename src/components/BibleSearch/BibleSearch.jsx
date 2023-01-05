import React, {useState, useEffect} from 'react';
import axios from "axios";
import styles from './BibleSearch.module.css';
import Button from "../Button/Button";
import bibleSearchImgSheep from "../../assets/login-sheep-pexels-david-selbert-6467929-2.jpg";

const BibleSearch = () => {

    //API variable
    const API_KEY = "1d925b504a9d2eab00eb33c578d4bdd1"

    // state variables
    const [bibleId, setBibleId] = useState('english-standard-version');
    const [searchTerm, setSearchTerm] = useState('Jesus');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [bibleIds, setBibleIds] = useState([]);
    const [loading, setLoading] = useState(false);

    //Async function
    useEffect(() => {
        const fetchBibleIds = async () => {
            try {
                const response = await axios.get('https://api.scripture.api.bible/v1/bibles?api-key=1d925b504a9d2eab00eb33c578d4bdd1');
                setBibleIds(response.data.data);
            } catch (error) {
                setError(error);
            }
        };
        void fetchBibleIds();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${bibleId}/search?query${searchTerm}`);
            setSearchResults(response.data.results);
            console.log(setSearchResults);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <>
            <div className={styles.bibleSearchOuterContainer}>
                <div className={styles.bibleSearchInnerContainer}>
                    <div>
                        <form onSubmit={handleSearch}>
                            <div className={styles.registerForminput}>
                                <label htmlFor="bible-select"></label>
                                <select name="bible-select" id="bible-select" value={bibleId}
                                        onChange={(e) => setBibleId(e.target.value)}>
                                    <option className={styles.rrForminput} value="">Selecteer een Bijbel</option>
                                    {bibleIds && bibleIds.length > 0 && bibleIds.map((id) => (
                                        <option key={id} value={id}>{id}</option>
                                    ))}
                                </select>
                                <br/>
                                <label htmlFor="search-input"></label>
                                <input className={styles.bibleSearchFormInputTekst} type="text" id="search-input"
                                       value={searchTerm}
                                       onChange={(e) => setSearchTerm(e.target.value)}/>
                                <Button type="submit">Zoek</Button>
                            </div>
                        </form>
                        <hr/>
                        {error && <span className={styles.errorsTekst}>Er is een fout opgetreden: {error.message}</span>}
                        {searchResults.map((result) => (
                            <div key={result.id}>
                                <h2>{result.reference}</h2>
                                <p>{result.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <img className={styles.loginImg} src={bibleSearchImgSheep} alt="Afbeelding van een Schaap"/>
            </div>
        </>
    );
};

export default BibleSearch;