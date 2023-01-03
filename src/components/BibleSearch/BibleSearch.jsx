import React, {useState, useEffect} from 'react';
import styles from '../../components/BibleSearch/BibleSearch.module.css';

const BibleSearch = () => {

    const [bibleId, setBibleId] = useState(' ');
    const [searchTerm, setSearchTerm] = useState(' ');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [bibleIds, setBibleIds] = useState([])

    useEffect(() => {
        const fetchBibleIds = async () => {
            try {
                const response = await fetch('https://api.scripture.api.bible/v1/bibles');
                const data = await response.json();
                setBibleIds(data.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchBibleIds();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await
                    fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/search?query=${searchTerm}`);
                const data = await response.json();
                setSearchResults(data.results);
            } catch (error) {
                setError(error)
            }
        };
        if (bibleId) {
            fetchData();
        }
    }, [bibleId, searchTerm]);

    return (
        <>
            <div>
                <form>
                    <label htmlFor="bible-select">Selecteer een Bijbel:</label>
                    <select id="bible-select" value={bibleId} onChange={e => setBibleId(e.target.value)}>
                        <option value="">Selecteer een Bijbel</option>
                        {bibleIds.map(id => (
                            <option key={id} value={id}>
                                {id}
                            </option>
                        ))}
                    </select>
                    <br/>
                    <label htmlFor="search-input">Zoeken:</label>
                    <input type="text" id="search-input" value={searchTerm}
                           onChange={e => setSearchTerm(e.target.value)}/>
                </form>
                {error && <p> Er is een fout opgetreden: {error.message}</p>}
                {searchResults.map(result => (
                    <div key={result.id}>
                        <h2>{result.reference}</h2>
                        <p>{result.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BibleSearch;