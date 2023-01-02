import React, {useState} from 'react';
import axios from "axios";

/*STEPS:
1. create component to store search form and -results;
2. create state variable with use state;
3. add a form;
4. create a submission handeling methode;
5. create a rendering component;
6. render the results in the search component.
*/


const SearchState = () => {

    const [query, setQuery] = useState();
    const [results, setResults] = useState([])

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const Results = (props) => {
        const {results} = props;
    }

    axios.get(`https://api.scripture.api.bible/v1/bibles/0559d191cfebe7b9-01/search?query=${query}`, {
        headers: {
            'api-key': '8a35b863-a033-41a3-9e27-a142c71af966',
        },
    })
        .then((response) => {
            setResults(response.data.data)
        })

    return (
        <>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={query}
                            onChange={handleChange}
                        />
                        <div>
                            <button type="submit">Zoek</button>
                        </div>
                    </form>
                    {results.length > 0 && (
                        <ul>
                            {results.map((result) => (
                                <li key={result.id}>{result.attributes.content}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchState;