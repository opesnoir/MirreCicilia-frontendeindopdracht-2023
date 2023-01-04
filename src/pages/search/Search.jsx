import React from 'react';
import styles from './Search.module.css';
import BibleSearch from "../../components/BibleSearch/BibleSearch";
import TestApi from "../../components/TestApi";



const Search = () => {
    return (
        <div>
            <BibleSearch/>
            {/*<TestApi/>*/}

        </div>
    );
};

export default Search;