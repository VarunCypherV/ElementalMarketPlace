'use client'
import React from "react";
import Layout1 from "../layouts/Layout1";
import styled from "styled-components";
import Card from "../components/Card";
import FilterButton from "../components/FilterButton";

function FavouritePage() {
  const data = [
    {
      offer: "true",
      offerpercent: "70% Off",
      mrp: "₹1179",
      sp: "₹359",
      name: "CEAT (No- 6) Poplar Willow Cricket Bat",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
    {
      offer: "true",
      offerpercent: "70% Off",
      mrp: "₹1179",
      sp: "₹35129",
      name: "CEAT (No- 6) Poplar Willow Cricket Bat",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
    {
      offer: "true",
      offerpercent: "70% Off",
      mrp: "₹1179",
      sp: "₹35933",
      name: "CEAT (No- 6) Poplar Willow Cricket Bat",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
    {
      offer: "true",
      offerpercent: "70% Off",
      mrp: "₹1179",
      sp: "₹352229",
      name: "CEAT (No- 6) Poplar Willow Cricket Bat",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
    {
      offer: "true",
      offerpercent: "70% Off",
      mrp: "₹1179",
      sp: "₹359",
      name: "CEAT (No- 6) Poplar Willow Cricket Bat",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
    {
      offer: "true",
      offerpercent: "70% Off",
      mrp: "₹1179",
      sp: "₹359",
      name: "CEAT (No- 6) Poplar Willow Cricket Bat",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    },
  ];

  return (
    <Layout1>
      <MainContainer>
        <HeaderSection>
          <Title>Favourites : Loved by you</Title>
          <Filters>
            <p>Search Filters</p>
            <FilterButton filter="Sort" />
            <FilterButton filter="Price" />
            <FilterButton filter="Offers" />
            <FilterButton filter="Review" />
          </Filters>
        </HeaderSection>
        <Items>
          {data.map((item, index) => (
            <CardContainer>
              <Card
                key={index} // Adding a unique key for each Card component
                offer={item.offer}
                offerpercent={item.offerpercent}
                mrp={item.mrp}
                sp={item.sp}
                name={item.name}
                image={item.image}
              />
            </CardContainer>
          ))}
        </Items>
      </MainContainer>
    </Layout1>
  );
}

export default FavouritePage;

const MainContainer = styled.div``;

const OptionsContainer = styled.div``;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin:50px;
`;

const HeaderSection = styled.div`
  background-color: #ffedf4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px; /* Adds spacing between FilterButton components */
  align-items: center; /* Center the items vertically */
  > p {
    font-size: 16px;
    color: #ff0065;
    font-family: "merienda";
    font-weight: 600;
  }
`;

const Title = styled.div`
  font-size: 32px;
  color: #ff0065;
  font-family: "merienda";
  font-weight: 600;
  margin-right:20px;
`;

const CardContainer = styled.div`
margin:20px;
`;