import React from "react";
import {
  IoMdRestaurant,
  IoMdBeer,
  IoMdFitness,
  IoMdPeople,
} from "react-icons/io";

import Title from "./Title";

class Services extends React.Component {
  state = {
    services: [
      {
        icon: <IoMdFitness />,
        title: "free gym",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque sollicitudin rhoncus. Vivamus venenatis nunc eu hendrerit lobortis. Maecenas faucibus ex sit amet ante vulputate efficitur.",
      },
      {
        icon: <IoMdBeer />,
        title: "best beer",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque sollicitudin rhoncus. Vivamus venenatis nunc eu hendrerit lobortis. Maecenas faucibus ex sit amet ante vulputate efficitur.",
      },
      {
        icon: <IoMdPeople />,
        title: "networking events",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque sollicitudin rhoncus. Vivamus venenatis nunc eu hendrerit lobortis. Maecenas faucibus ex sit amet ante vulputate efficitur.",
      },
      {
        icon: <IoMdRestaurant />,
        title: "delicious food",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque sollicitudin rhoncus. Vivamus venenatis nunc eu hendrerit lobortis. Maecenas faucibus ex sit amet ante vulputate efficitur.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, idx) => {
            return (
              <article key={idx} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
