import React from 'react';

const pagination = ({
    totalPosts, 
    postsPerPage, 
    setCurrentPage, 
    currentPage,
    handleDec,
    handleInc,
}) => {

    let pages = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            <button 
                className='side-button'
                onClick={handleDec}
                disabled={currentPage === 1}
            >
                <strong>{`<`}</strong>
            </button>
            {
                pages.map((page, index) => {
                    return (
                    <button 
                        key={index} 
                        onClick={() => setCurrentPage(page)}
                        className = {page === currentPage ? 'active' : 'middle-button'}
                        >{page}
                    </button>
                )})
            }
            <button 
                className='side-button'
                onClick={handleInc}
                disabled={currentPage === (Math.ceil(totalPosts/postsPerPage))}
            >
                <strong>{`>`}</strong>
            </button>
        </div>
    );
};

export default pagination;