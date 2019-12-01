import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $199">
                    <Link to="/rooms" className="btn-primary">Our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </React.Fragment>
    )
}

export default Home;
