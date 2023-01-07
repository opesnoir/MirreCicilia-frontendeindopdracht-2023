import React, {useState, useEffect} from 'react';
import axios from "axios";
import button from "../Button/Button";

const NextPage = ({page, pageSize, totalPage}) => {
    const [results, setResults] = useState([]);

    //fetch page of result
    const fetchPage = async (page) => {
        try {
            const offset = (page - 1) * pageSize;
            const limit = pageSize;
            const response = await axios.get(`/api/search?offset=${offset}&limit=${limit}`);
            const results = response.data
            console.log(response.data)
            // state changing
            setResults(results);
        } catch (error){
            console.error(error);
        }
    }

    //fetch current page
    useEffect(()=>{
        fetchPage(page);
    }, [page]);

    // button prev page
    let previousButton;
    if (page > 1) {
        previousButton = <button onClick={()=> fetchPage( page - 1)}>Vorige</button>;
    }

    //button next page
    let nextButton;
    if (page < totalPage){
        nextButton = <button onClick={() => fetchPage(page + 1)} >Volgende</button>;
    }

    return (
        <>
            {results.map(result => (
                <div key={result.id}>{result.title}</div>
            ))}
            {previousButton}
            {nextButton}
        </>
    );
};

export default NextPage;