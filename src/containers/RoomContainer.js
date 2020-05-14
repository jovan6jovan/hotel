import React from "react";
import { RoomConsumer } from "../context";

import Loading from "../components/Loading";
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, filteredRooms, rooms } = value;

        return loading ? <Loading /> : (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={filteredRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer;
