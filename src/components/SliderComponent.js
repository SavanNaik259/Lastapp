import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';
import './App.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // Custom arrows
  autoplay: true,
  autoplaySpeed: 3000, // Adjust autoplay speed (in milliseconds)
};

const SliderComponent = ({ images }) => {
  const [slider, setSlider] = useState(null);

  const nextSlide = () => {
    if (slider) slider.slickNext();
  };

  const prevSlide = () => {
    if (slider) slider.slickPrev();
  };
  useEffect(() => {
    const options = ['Portrait Photographer', 'Event photographer', 'Videographer'];

    const typed = new Typed('.multiple-text', {
      strings: options,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="slider-container">
      <Slider ref={(c) => setSlider(c)} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={image.alt} />

          </div>
        ))}
      </Slider>
            <div className="caption">
               <h1 className='text-capitalize text-white fw-bolder'>savan naik</h1>
  <h3 className='text-white'><span className="multiple-text text-transform-capitalize"></span></h3>
  <p className="text-capitalize text-grey mt-1 mb-10 text-center text-lg-start">Capturing Moments: The Art, Craft, and Vision of a Photographer's Journey</p>
            </div>
      <button className="prev-btn" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="next-btn" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default SliderComponent;
