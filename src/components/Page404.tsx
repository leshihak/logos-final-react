import React from 'react';
import '../style.scss';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='page404'>
            <h1>404</h1>
            <h4>Oops! Page not found.</h4>
            <h6>
                Sorry, but the page you are looking for is not found. Please,
                make sure you have typed the current URL.
            </h6>
            <Link to='/' className='getStartedHeaderLink'>
                {'Back to Home Page'}
            </Link>
        </div>
    );
};

export default Page404;
