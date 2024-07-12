'use client';
import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import axios from "axios";
import { useRouter } from 'next/navigation';

function ItemCarousel({ topic }) {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if(topic!=="History"){
          const response = await axios.get(`http://localhost:3000/tagcard/tagitems?tagname=${topic}`);
        setItems(response.data); // Assuming response.data is an array of items
        }
        else{
          const userid = localStorage.getItem('id');
          const response = await axios.get(`http://localhost:3000/userDeets/getVisited?userid=${userid}`);
          setItems(response.data.Visited);
          console.log("response:",response)
   
        }
        
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [topic]);

  const handleCardClick = async (id) => {
    try{
    const userId = localStorage.getItem('id');
    const response = await axios.post('http://localhost:3000/userDeets/addToVisited', {
      userid: userId,
      itemid: id,
    });

    if (response.status === 200) {
      console.log(response.data.message);
    } else {
      console.error(response.data.message);
    }
  } catch (error) {
    console.error("Error adding to Visited:", error);
  }

    //ADD API TO SEND USERID AND ITEMID AND ADD TO VISITED 
    router.push(`/itempage/${id}`);
  };

  const responsive = {
    extraLargeDesktop2: {
      breakpoint: { max: Infinity, min: 1400 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 20
    },
    extraLargeDesktop: {
      breakpoint: { max: 1400, min: 1100 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 20
    },
    Laptop: {
      breakpoint: { max: 1100, min: 1050 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    },
    largeDesktop: {
      breakpoint: { max: 1050, min: 900 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 50
    },
    tablet: {
      breakpoint: { max: 900, min: 800 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 800, min: 700 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 90
    },
    mobile2: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
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
      draggable={true}
    >
      {items.map(item => (
        <div key={item.id} onClick={() => handleCardClick(item.id)}>
        {console.log(topic,item)}
          <Card
            sp={item.attributes.SP}
            cp={item.attributes.CP}
            name={item.attributes.Name}
            description={item.attributes.Description}
            features={item.attributes.Features}
            image={"http://localhost:1337"+ item.attributes.Images.data[0].attributes.url}
            offer="true"
            offerpercent="70% Off"
            mrp="₹1179"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default ItemCarousel;


