import React from 'react';
import styles from './Pagination.module.css'

// functional component for pagination
const Pagination = ({totalPost, postPerPage, currentPage, setCurrentPage}) => {
    //array to store the page numbers
    let pages = []

    // loop through number of pages and give page numbers to the array
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }
   // log the styles to debug a problem
   /*console.log(styles)*/

    // render pagination control
    return (
        <>
            <div className={styles.pagination}>
                {pages.map((page, index) => {
                    return <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? styles.active : " "}>{page}</button>
                })}
            </div>
        </>
    );
};

export default Pagination;