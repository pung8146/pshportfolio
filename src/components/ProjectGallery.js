import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const images = [
  'https://via.placeholder.com/300x300?text=Image%201',
  'https://via.placeholder.com/300x300?text=Image%202',
  'https://via.placeholder.com/300x300?text=Image%203',
];

function ProjectGallery() {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      slideToClickedSlide: true,
    });
  }, []);

  return (
    <div className="container">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={images[images.length - 1]} alt="" />
          </div>
          {images.map((img, i) => (
            <div className="swiper-slide" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
          <div className="swiper-slide">
            <img src={images[0]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
