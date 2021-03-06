import React, { createContext, useState, useEffect } from "react";
import Client from "./Contentful";

const RoomContext = createContext();

const RoomProvider = (props) => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  let [capacity, setCapacity] = useState(1);
  let [price, setPrice] = useState(0);
  const [minPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    Client.getEntries({
      content_type: "hotelData",
      order: "sys.createdAt"
    })
    .then((response) => {
      let rooms = formatData(response.items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((room) => room.price));
      let maxSize = Math.max(...rooms.map((room) => room.size));
  
      setRooms(rooms);
      setFeaturedRooms(featuredRooms);
      setFilteredRooms(rooms);
      setLoading(false);
      setPrice(maxPrice);
      setMaxPrice(maxPrice);
      setMaxSize(maxSize);
    })
    .catch(console.error);

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

  useEffect(() => {
    const filterRooms = () => {
      let tempRooms = [...rooms];
  
      if (type !== "all") {
        tempRooms = tempRooms.filter((room) => room.type === type);
      }
  
      if (parseInt(capacity) !== 1) {
        tempRooms = tempRooms.filter((room) => room.capacity >= parseInt(capacity));
      }
  
      tempRooms = tempRooms.filter((room) => room.price <= parseInt(price));
  
      tempRooms = tempRooms.filter((room) => room.size >= minSize && room.size <=maxSize);
  
      if(breakfast) {
        tempRooms = tempRooms.filter((room) => room.breakfast === true);
      }
  
      if(pets) {
        tempRooms = tempRooms.filter((room) => room.pets === true);
      }
  
      setFilteredRooms(tempRooms);
    };

    filterRooms();
  }, [rooms, type, capacity, price, minSize, maxSize, breakfast, pets]);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    switch (name) {
      case "type":
        return setType(value);
      case "capacity":
        return setCapacity(value);
      case "price":
        return setPrice(value);
      case "minSize":
        return setMinSize(value);
      case "maxSize":
        return setMaxSize(value);
      case "breakfast":
        return setBreakfast(value);
      case "pets":
        return setPets(value);
      default:
        console.log("Made by: jovan6jovan");
    }
  };

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);

    return room;
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        filteredRooms,
        featuredRooms,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        loading,
        getRoom,
        handleChange,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
