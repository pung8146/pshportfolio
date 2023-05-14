import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination' 
import 'swiper/css/effect-coverflow'
import styled from 'styled-components';

import { EffectCoverflow,Pagination,Navigation } from 'swiper';

import slide_image_1 from '../assets/images/dog.png'
import slide_image_2 from '../assets/images/cat1.png'
import slide_image_3 from '../assets/images/cat2.png'
import slide_image_4 from '../assets/images/wait1.png'
import slide_image_5 from '../assets/images/wait2.png'

const Container = styled.div`
  width: 142rem;
  background-color: gold;
  padding: 4rem 1rem;
`
const SwiperSlideContainer = styled.div`
  width: 37rem;
  height: 42rem;
  position: relative;
  border: 1px solid blue;
  img{
    width: 100%;
    height: 100%;
  }
`;

const ProjectGallery = () => {
  return (
    <Container className='container'>
      <Swiper 
      effect={'coverflow'}
      grabCursor={ true}
      centeredSlides={ true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      modules={{EffectCoverflow,Pagination,Navigation}}
      pagination={{el:'.swiper-pagination',clickable:true}}
      navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',clickable:true}}
      >
        <SwiperSlide>
          <SwiperSlideContainer>
            <img src={slide_image_1} alt='dog' />
          </SwiperSlideContainer>
        </SwiperSlide>
      
        <SwiperSlide>
          <SwiperSlideContainer>
            <img src={slide_image_2} alt='dog' />
          </SwiperSlideContainer>
        </SwiperSlide>
        
        <SwiperSlide>
          <SwiperSlideContainer>
            <img src={slide_image_3} alt='dog' />
          </SwiperSlideContainer>
        </SwiperSlide>
        
        <SwiperSlide>
          <SwiperSlideContainer>
            <img src={slide_image_4} alt='dog' />
          </SwiperSlideContainer>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideContainer>
            <img src={slide_image_5} alt='dog' />
          </SwiperSlideContainer>
        </SwiperSlide>
      <div className='slide-controlr' style={{position:"relative",bottom:'1rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='swiper-button-prev slider-arrow'>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className='swiper-button-next slider-arrow'>
          <ion-icon name="arrow-forwad-outline"></ion-icon>
        </div>
        <div className='swiper-pagination'></div>
      </div>
      </Swiper>
    </Container>
  );
};

export default ProjectGallery;