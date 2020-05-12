import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomContainer from "../containers/RoomContainer";

const Rooms = () => (
  <>
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link to="/" className="btn-primary">
          back to home
        </Link>
      </Banner>
    </Hero>
    <RoomContainer />
  </>
);

export default Rooms;
