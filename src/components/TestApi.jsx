import React, {useEffect} from 'react';
import axios from "axios";

function TestApi(props) {
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://api.scripture.api.bible/v1/bibles?api-key=dc597b00-5a0a-403b-a2af-9e1eabd797a1');
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
        void fetchData();
    },[])

    return (
        <div></div>
    );
}

export default TestApi;