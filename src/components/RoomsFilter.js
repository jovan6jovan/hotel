import React, { useContext } from "react";
import { RoomContext } from "../context";

import Title from "./Title";
import Room from "./Room";

const RoomsFilter = ({ rooms }) => {
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    handleChange,
  } = useContext(RoomContext);

  const getUniqueValues = (items, value) => [
    ...new Set(items.map((item) => item[value])),
  ];

  let types = getUniqueValues(rooms, "type");
  types = ["all", ...types];
  types = types.map((type, idx) => {
    return (
      <option value={type} key={idx}>
        {type}
      </option>
    );
  });

  let numberOfGuests = getUniqueValues(rooms, "capacity");
  numberOfGuests = numberOfGuests.map((number, idx) => {
    return (
      <option value={number} key={idx}>
        {number}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Number of guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {numberOfGuests}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
