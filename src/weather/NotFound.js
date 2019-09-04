import React from 'react';

const NotFound = () => {
    return (
        <li className='not-found'>
            <i className="material-icons not-found">search</i>
            <h3>Sorry, no cities match your search.</h3>
        </li>
    );
}

export default NotFound;