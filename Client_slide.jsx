import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import "./Client_slide.css";

const testimonials = [
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos.",
    name: "Client Name",
    profession: "Profession",
    image:
      "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos.",
    name: "Client Name",
    profession: "Profession",
    image:
      "https://images.pexels.com/photos/3940569/pexels-photo-3940569.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos.",
    name: "Client Name",
    profession: "Profession",
    image:
      "https://images.pexels.com/photos/31197408/pexels-photo-31197408/free-photo-of-portrait-of-teen-with-branch-and-colorful-lighting.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos.",
    name: "Client Name",
    profession: "Profession",
    image:
      "https://images.pexels.com/photos/6474585/pexels-photo-6474585.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos.",
    name: "Client Name",
    profession: "Profession",
    image:
      "https://images.pexels.com/photos/30048512/pexels-photo-30048512/free-photo-of-stylish-woman-in-beige-suit-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const Client_slide = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    if (selectedIndex >= testimonials.length) {
      setIndex(0);
    } else if (selectedIndex < 0) {
      setIndex(testimonials.length - 1);
    } else {
      setIndex(selectedIndex);
    }
  };

  return (
    <div className="testimonial-slider">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        interval={null}
      >
        {testimonials.map((testimonial, idx) => (
          <Carousel.Item key={idx}>
            <div className="testimonial-card">
              <p>{testimonial.text}</p>
              <div className="testimonial-info">
                <img
                  src={testimonial.image}
                  alt="Client"
                  className="client-image"
                />
                <div>
                  <h6 className="mb-0">{testimonial.name}</h6>
                  <small>{testimonial.profession}</small>
                </div>
              </div>
              <Quote className="quote-icon" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="arrow-buttons">
        <button
          className="arrow-button"
          onClick={() => handleSelect(index - 1)}
          disabled={index === 0}
        >
          <ArrowLeft />
        </button>
        <button
          className="arrow-button"
          onClick={() => handleSelect(index + 1)}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Client_slide;
