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

  const getUniqueValues = (itemss, value) => [...new Set(itemss.map(item => item[value]))];

  let types = getUniqueValues(rooms, "type");
  types = ["all", ...types];

  types = types.map((type, idx) => {
    return (
    <option value={type} key={idx}>{type}</option>
    )
  })

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
      </form>
    </section>
  );
};

export default RoomsFilter;
