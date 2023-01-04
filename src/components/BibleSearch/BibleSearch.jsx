import React, {useState, useEffect} from 'react';

const BibleSearch = () => {
    const [bibleId, setBibleId] = useState('english-standard-version');
    const [searchTerm, setSearchTerm] = useState('Jesus');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [bibleIds, setBibleIds] = useState([]);

    useEffect(()=>{
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

    const handleSearch = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/search?query=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data.results);
        } catch (error) {
            setError(error);
        }
    };


    return (
        <>

        </>
    );
};

export default BibleSearch;