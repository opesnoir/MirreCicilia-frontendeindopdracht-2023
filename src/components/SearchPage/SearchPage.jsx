import React, {useEffect, useState} from 'react';
import axios from "axios";
import API_KEY from "../../config/config";

function SearchPage() {

    //state variables
    const [bibleId, setBibleId] = useState('english-standard-version');
    const [searchTerm, setSearchTerm] = useState('Jesus');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(false);
    const [bibleIds, setBibleIds] = useState([]);
    const [loading, setLoading] = useState(false);

    //async function
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${bibleId}/search`, {
                    headers: {
                        'api-key': API_KEY,
                    },
                    params: {
                        query: searchTerm,
                    },
                });
                setSearchResults(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false)
            }
        }
        void fetchData();
    }, [bibleId, searchTerm]);



    return (
        <>



        </>
    );
}

export default SearchPage;