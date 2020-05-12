import React from "react";

import Room from "./Room";

const RoomsList = ({ rooms }) => {
  return rooms.length === 0 ? (
    <div className="empty-search">
      <h3>Unfortunately, there are no rooms matching your search</h3>
    </div>
  ) : (
    <section className="roomslist">
      <div className="roomslist-center">
        { rooms.map(room => <Room key={room.id} room={room} />) }
      </div>
    </section>
  );
};

export default RoomsList;
