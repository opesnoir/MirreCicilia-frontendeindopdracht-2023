import React from 'react';
import styles from './Pagination.module.css'

const Pagination = ({totalPost, postPerPage, currentPage, setCurrentPage}) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }

    console.log(styles)

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