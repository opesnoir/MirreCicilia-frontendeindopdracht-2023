import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "../BibleSearch/BibleSearch.module.css";

//API variable
const API_KEY = "1d925b504a9d2eab00eb33c578d4bdd1"

const SearchPage = () => {

    // state variables
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Jesus');
    const [searchResults, setSearchResults] = useState([]);
    const [bible, setBible] = useState('english-standard-version')

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
            setSearchResults(response.data.data);
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {error && <span>Er is een fout opgetreden: {error.message} </span>}
            {loading && <span>Loading...</span>}
            <form onSubmit={handleSearch}>
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
            {searchResults.length > 0 && (
                <ul>
                    {searchResults.map((result) =>
                        <li key={result.id}>{result.content}</li>
                    )}
                </ul>
            )}
        </>
    );
};

export default SearchPage;