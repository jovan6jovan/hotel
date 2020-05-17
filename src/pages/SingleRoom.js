import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "lightbox2/dist/css/lightbox.css";
import "lightbox2/dist/js/lightbox-plus-jquery";
import Banner from "../components/Banner";
import { RoomContext } from "../context";
import { StyledHero } from "../components/StyledHero";

const SingleRoom = (props) => {
  const [slug] = useState(props.match.params.slug);
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

  const [mainImg, ...restOfTheImages] = images;

  return (
    <>
      <StyledHero img={mainImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {restOfTheImages.map((image, idx) => {
            return (
              <a key={idx} href={image} data-lightbox="room-images">
                <img src={image} alt={name} className="single-room-image" />
              </a>
            )
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: <span>${price}</span></h6>
            <h6>size: <span>{size} SQFT</span></h6>
            <h6>
              max capacity: <span>{capacity > 1 ? `${capacity} people` : `${capacity} person`}</span>
            </h6>
            <h6><span>{pets ? "pets allowed" : "no pets allowed"}</span></h6>
            <h6><span>{breakfast && "free breakfast included"}</span></h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((extra, idx) => <li key={idx}>- {extra}</li>)}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
