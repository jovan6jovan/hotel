import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import defaultBckgr from "../assets/room-2.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Loading from "../components/Loading";
import { RoomContext } from "../context";

const SingleRoom = (props) => {
  const [slug, setSlug] = useState(props.match.params.slug);
  const [defaultBcg, setDefaultBcg] = useState(defaultBckgr);

  // useEffect(() => {}, []);

  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>No room found</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    pets,
    breakfast,
    images,
  } = room;

  return (
    <Hero hero="roomsHero">
      <Banner title={`${name} room`}>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default SingleRoom;
