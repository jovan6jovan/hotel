import React from "react";
import { RoomConsumer } from "../context";

import Loading from "../components/Loading";
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;

        return loading ? <Loading /> : (
          <>
            Hello from Rooms Container
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer;
