import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from '../SearchPage/SearchPage.module.css';
import searchPageImgSheep from "../../assets/login-sheep-pexels-david-selbert-6467929-2.jpg";
import Pagination from "../Pagination/Pagination";


//API variable
const API_KEY = process.env.REACT_APP_API_KEY

const SearchPage = () => {

    // state variables
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Jesus');
    const [searchResults, setSearchResults] = useState([]);
    const [bible, setBible] = useState('english-standard-version');
    const [totalResults, setTotalResults] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);

    // async function to fetch a list of Bibles
    useEffect(() => {
        async function fetchData() {
            setError(false)
            try {
                setLoading(true)
                const response = await axios.get('https://api.scripture.api.bible/v1/bibles', {
                    // header data (includes API key)
                    headers: {
                        'api-key': API_KEY,
                    },
                    // add params here
                    params: {}
                })
                console.log(response.data.data)
                setData(response.data.data)
            } catch (error) {
                console.error(error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        // invoke function
        void fetchData()
    }, []);

    // function for form submit and search
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${bible}/search`, {
                // header data (includes API key)
                headers: {
                    'api-key': API_KEY,
                },
                params: {
                    query: searchTerm,
                },
            });
            console.log(response.data.data);
            setSearchResults(response.data.data.verses);
            /*console.log(response.data.data.total)*/
            setTotalResults(response.data.data.total)
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    // variable that hides post that should not yet be displayed
    const currentPost = searchResults.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <div className={styles.searchPageOuterContainer}>
                <div className={styles.searchPageInnerContainer}>
                    <div>
                        <form onSubmit={handleSearch} className={styles.searchPageFormContainer}>
                            <label htmlFor="bible">Selecteer een Bijbel:</label>
                            <select
                                name="bible"
                                id="bible"
                                value={bible}
                                onChange={(e) => setBible(e.target.value)}>
                                {data.map((b) => (
                                    <option key={b.id} value={b.id}>
                                        {b.name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="searchTerm">Voer een zoekterm in:</label>
                            <input
                                type="text"
                                name="searchTerm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}/>
                            <button type="submit">Zoeken</button>
                        </form>
                        {error && <span className={styles.errorsTekst}>Er is een fout opgetreden: De Bijbeltaal en zoektermtaal dienen overeen te komen. {error.message} </span>}
                        <hr/>
                        {loading && <span className={styles.loadingTekst} >Loading...</span>}
                        {totalResults > 0 && (
                            <p className={styles.searchPageTotalResults}> Totaal aantal resultaten: <span className={styles.searchPageTotalResultsAantal}>{totalResults}</span></p>
                        )}
                        {currentPost.length > 0 && (
                            <ul className={styles.searchPageUlistItems}>
                                {currentPost.map((result) =>
                                    <li key={result.id} className={`${styles.searchPageListItems} search-result-item`}>
                                        <span className={styles.searchPageReference}>{result.reference}</span> <span
                                        className={styles.searchPageText}>{result.text}</span></li>
                                )}
                            </ul>
                        )}
                        <Pagination
                            totalPost={searchResults.length}
                            postPerPage={postPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>

            <div>
                <img className={styles.searchPageImg} src={searchPageImgSheep} alt="Afbeelding van een Schaap"/>
            </div>
        </>
    );
};

export default SearchPage;