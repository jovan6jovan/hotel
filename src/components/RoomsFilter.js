import React, { useContext } from "react";
import { RoomContext } from "../context";

import Title from "./Title";

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
        <div className="form-group">
          <label htmlFor="size">Room size (sqft)</label>
          <input
            type="number"
            name="minSize"
            id="size"
            value={minSize}
            onChange={handleChange}
            className="size-input"
          />
          <input
            type="number"
            name="maxSize"
            id="size"
            value={maxSize}
            onChange={handleChange}
            className="size-input"
          />
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
