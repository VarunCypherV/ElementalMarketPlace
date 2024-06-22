'use client'
import React, { useState } from "react";
import Layout1 from "../layouts/Layout1";
import styled from "styled-components";
import Filters from "../components/Filters";
import StickyBox from "react-sticky-box";
import Card from "../components/Card";
function CategoryPage() {
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
        <HeaderText>
          Category: <span id="CatName"> New Arrivals</span>
        </HeaderText>
        <Content>
          <FiltersContainer>
            <StickyBox offsetTop={0} offsetBottom={0}>
              <Filters />
            </StickyBox>
          </FiltersContainer>
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
        </Content>
      </MainContainer>
    </Layout1>
  );
}

export default CategoryPage;

const MainContainer = styled.div``;
const HeaderText = styled.div`
  padding: 50px;
  font-size: 32px;
  color: #ff0065;
  font-family: "merienda";
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FiltersContainer = styled.div`
margin-right:25px;
flex-shrink: 0;

`;

const CardContainer = styled.div`
margin:10px;
`;