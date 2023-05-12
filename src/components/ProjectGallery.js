import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import styled from 'styled-components';

// Triple Slider is a simple and easy to use triple slider template (based on Swiper). Three Swipers work as one to allow you to swipe (slide) through cards with pictures and see previous and next slides. 형식으로 만들꺼야

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: tomato;
  position: relative;
`
const Title = styled.h1`
position: absolute;
font-size: 60px;
text-align: center;
color:gold;
`

const TripleSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
  }
  .swiper-pagination {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background-color: #fff;
      opacity: 0.5;
      &:not(:last-child) {
        margin-right: 10px;
      }
      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 10;
    &:after {
      font-size: 20px;
      color: #000;
    }
  }
  .swiper-button-prev {
    left: 20px;
  }
  .swiper-button-next {
    right: 20px;
  }
`

const TripleSliderItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
`

const TripleSliderPagination = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #fff;
    opacity: 0.5;
    &:not(:last-child) {
      margin-right: 10px;
    }
    &.swiper-pagination-bullet-active {
      opacity: 1;
    }
  }

`

const TripleSliderButton = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 10;
  &:after {
    font-size: 20px;
    color: #000;
  }
  &.swiper-button-prev {
    left: 20px;
  }
  &.swiper-button-next {
    right: 20px;
  }
`

const TripleSliderItemTitle = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 20px;
  color: #fff;
  z-index: 10;
`

const TripleSliderItemDesc = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 14px;
  color: #fff;
  z-index: 10;
`

const TripleSliderItemButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 14px;
  color: #fff;
  z-index: 10;
`

const TripleSliderItemButtonLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`

const TripleSliderItemButtonLink2 = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`

const TripleSliderItemButtonLink3 = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`

const TripleSliderItemButtonLink4 = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`


export default function ProjectGallery() {
  return (
    <Wrapper>
      <Title>Project Gallery</Title>
      <TripleSlider>
        <TripleSliderItem>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="img" style={{backgroundColor:"red"}}></div>
              <TripleSliderItemTitle>Project 1</TripleSliderItemTitle>
              <TripleSliderItemDesc>Project 1 Description</TripleSliderItemDesc>
              <TripleSliderItemButton>
                <TripleSliderItemButtonLink>View Project</TripleSliderItemButtonLink>
              </TripleSliderItemButton>
            </div>
            <div className="swiper-slide">
              <div className="img" style={{backgroundColor:"blue"}}></div>
              <TripleSliderItemTitle>Project 2</TripleSliderItemTitle>
              <TripleSliderItemDesc>Project 2 Description</TripleSliderItemDesc>
              <TripleSliderItemButton>
                <TripleSliderItemButtonLink2>View Project</TripleSliderItemButtonLink2>
              </TripleSliderItemButton>
            </div>
            <div className="swiper-slide">
              <div className="img" style={{backgroundColor:"yellow"}}></div>
              <TripleSliderItemTitle>Project 3</TripleSliderItemTitle>
              <TripleSliderItemDesc>Project 3 Description</TripleSliderItemDesc>
              <TripleSliderItemButton>
                <TripleSliderItemButtonLink3>View Project</TripleSliderItemButtonLink3>
              </TripleSliderItemButton>
            </div>
            <div className="swiper-slide">
              <div className="img" style={{backgroundColor:"green"}}></div>
              <TripleSliderItemTitle>Project 4</TripleSliderItemTitle>
              <TripleSliderItemDesc>Project 4 Description</TripleSliderItemDesc>
              <TripleSliderItemButton>
                <TripleSliderItemButtonLink4>View Project</TripleSliderItemButtonLink4>
              </TripleSliderItemButton>
            </div>
          </div>
          <TripleSliderButton className="swiper-button-prev"></TripleSliderButton>
          <TripleSliderButton className="swiper-button-next"></TripleSliderButton>
          <TripleSliderPagination className="swiper-pagination"></TripleSliderPagination>
        </div>
        </TripleSliderItem>
      </TripleSlider>
    </Wrapper>
  )
}




