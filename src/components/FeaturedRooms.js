import React from 'react';
import { RoomContext } from '../context';

import Title from './Title';
import Loading from './Loading';
import Room from './Room';

class FeaturedRooms extends React.Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms } = this.context;
        
        featuredRooms = featuredRooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : featuredRooms}
                </div>
            </section>
        )
    }
}

export default FeaturedRooms;
