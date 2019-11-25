import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => {
    return (
        <Hero>
            <Banner title="Error 404" subtitle="Page not found">
                <Link to="/" className="btn-primary">back to home</Link>
            </Banner>
        </Hero>
    )
}

export default Error;
