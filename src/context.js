import React, { createContext, useState, useEffect } from "react";
import items from "./data/data";

const RoomContext = createContext();

const RoomProvider = (props) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));

    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setLoading(false);
    setPrice(maxPrice);
    setMaxPrice(maxPrice);
    setMaxSize(maxSize);
  }, []);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      
      let room = {
        ...item.fields,
        images,
        id,
      };

      return room;
    });

    return tempItems;
  };

  const handleChange = e => {
    const value = e.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    // Sredi ovo! filterRooms f-ja ne uradi svoj posao istog trenutka kada se promeni tip sobe
    switch(name) {
      case "type":
        return setType(value, filterRooms());
      case "capacity":
        return setCapacity(value, filterRooms());
      case "price":
        return setPrice(value, filterRooms());
    }
  }

  const filterRooms = () => {
    let tempRooms = [...rooms];

    if(type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    setSortedRooms(tempRooms);
  }

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find(room => room.slug === slug);

    return room;
  }

  return (
    <RoomContext.Provider value={{ rooms, sortedRooms, featuredRooms, loading, getRoom, handleChange }}>
      {props.children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
