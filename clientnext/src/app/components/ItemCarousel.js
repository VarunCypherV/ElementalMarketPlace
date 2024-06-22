'use client'
import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
function ItemCarousel() {
  const responsive = {
    extraLargeDesktop2: {
      breakpoint: { max: Infinity, min: 1400 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 20 // Adjust this value as needed
    },
    extraLargeDesktop: {
      breakpoint: { max: 1400, min: 1100 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 20 // Adjust this value as needed
    },
    Laptop: {
      breakpoint: { max: 1100, min: 1050 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0 // Adjust this value as needed
    },
    largeDesktop: {
      breakpoint: { max: 1050, min:900 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 50// Adjust this value as needed
    },
    tablet: {
      breakpoint: { max: 900, min: 800 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0 // Adjust this value as needed
    },
    mobile: {
      breakpoint: { max: 800, min: 700 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 90 // Adjust this value as needed
    },
    mobile2: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0 // Adjust this value as needed
    },
  };
  

  return (
    <Carousel
      swipeable={true}
      responsive={responsive}
      removeArrowOnDeviceType={['mobile', 'tablet']}
      itemClass="itemClass"
      containerClass="containerClass"
      partialVisible={true}
      infinite={true}
    >
      
        <Card
          offer="true"
          offerpercent="70% Off"
          mrp="₹1179"
          sp="₹359"
          name="CEAT (No- 6) Poplar Willow Cricket Bat"
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
        /> 
        <Card
          offer="true"
          offerpercent="70% Off"
          mrp="₹1179"
          sp="₹35129"
          name="CEAT (No- 6) Poplar Willow Cricket Bat"
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
        /> 
        <Card
          offer="true"
          offerpercent="70% Off"
          mrp="₹1179"
          sp="₹35933"
          name="CEAT (No- 6) Poplar Willow Cricket Bat"
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
        /> 
        <Card
          offer="true"
          offerpercent="70% Off"
          mrp="₹1179"
          sp="₹352229"
          name="CEAT (No- 6) Poplar Willow Cricket Bat"
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
        /> 
        <Card
          offer="true"
          offerpercent="70% Off"
          mrp="₹1179"
          sp="₹359"
          name="CEAT (No- 6) Poplar Willow Cricket Bat"
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
        /> 
        <Card
          offer="true"
          offerpercent="70% Off"
          mrp="₹1179"
          sp="₹359"
          name="CEAT (No- 6) Poplar Willow Cricket Bat"
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
        /> 
    </Carousel>
  );
}

export default ItemCarousel;



const CarouselCard = styled(Card)`
  margin: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

{/* <CarouselCard
          offer="true"
          offerpercent="70% Off"
          mrp="₹1179"
          sp="₹359"
          name="CEAT (No- 6) Poplar Willow Cricket Bat"
          image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
        />  */}

