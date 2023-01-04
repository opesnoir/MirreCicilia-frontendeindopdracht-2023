import React, {useState, useEffect} from 'react';
import axios from "axios";

const BibleSearch = () => {
    const [bibleId, setBibleId] = useState('english-standard-version');
    const [searchTerm, setSearchTerm] = useState('Jesus');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [bibleIds, setBibleIds] = useState([]);

    useEffect(() => {
        const fetchBibleIds = async () => {
            try {
                const response = await axios.get('https://api.scripture.api.bible/v1/bibles?api-key=dc597b00-5a0a-403b-a2af-9e1eabd797a1');
                setBibleIds(response.data.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchBibleIds();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${bibleId}/search?query=${searchTerm}`);
            setSearchResults(response.data.results);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSearch}>
                    <label htmlFor="bible-select">Selecteer een Bijbel:</label>
                    <select name="bible-select" id="bible-select" value={bibleId}
                            onChange={(e) => setBibleId(e.target.value)}>
                        <option value="">Selecteer een Bijbel</option>
                        {bibleIds && bibleIds.length > 0 && bibleIds.map((id) => (
                            <option key={id} value={id}>{id}</option>
                        ))}
                    </select>
                    <br/>
                    <label htmlFor="search-input">Zoeken:</label>
                    <input type="text" id="search-input" value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button type="submit">Zoek</button>
                </form>
                {error && <p>Er is een fout opgetreden:: {error.message}</p>}
                {searchResults.map((result) => (
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