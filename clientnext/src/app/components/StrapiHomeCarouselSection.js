'use client'
import React from "react";
import styled from "styled-components";
import ItemCarousel from "./ItemCarousel";

const arrivalsImage = "/assets/Home/arrivals.png";
const dealsImage = "/assets/Home/Deals.png";

function StrapiHomeCarouselSection() {
    return (
      <MainContainer id="#MainShop">
        <TagLine>
          <p>Explore, embrace, and let your shopping adventure begin...</p>
        </TagLine>
        <MultiCarousels>
          <CategoryCarouselContainer>
            <CategoryTitleContainer image={arrivalsImage}/>
            <CarouselContainer>
              <ItemCarousel />
            </CarouselContainer>
          </CategoryCarouselContainer>

          <CategoryCarouselContainer>
            <CategoryTitleContainer image={dealsImage}/>
            <CarouselContainer>
              <ItemCarousel />
            </CarouselContainer>
          </CategoryCarouselContainer>

          <CategoryCarouselContainer>
            <CategoryTitleContainer image={arrivalsImage}/>
            <CarouselContainer>
              <ItemCarousel />
            </CarouselContainer>
          </CategoryCarouselContainer>

          <CategoryCarouselContainer>
            <CategoryTitleContainer image={arrivalsImage}/>
            <CarouselContainer>
              <ItemCarousel />
            </CarouselContainer>
          </CategoryCarouselContainer>

          <CategoryCarouselContainer>
            <CategoryTitleContainer image={arrivalsImage}/>
            <CarouselContainer>
              <ItemCarousel />
            </CarouselContainer>
          </CategoryCarouselContainer>
        </MultiCarousels>
      </MainContainer>
    );
  }
  

export default StrapiHomeCarouselSection;

const MainContainer = styled.div`
  padding: 50px;
  background-color: #ffedf4;
`;

const TagLine = styled.div`
  text-align: center;
  margin-bottom:50px;
  > p {
    color: #ff0065;
    font-family: "Merienda";
  }
`;

const MultiCarousels = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const CategoryCarouselContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

const CategoryTitleContainer = styled.div`
  flex: 5;
  width: 240px;
  height: 240px;
  @media (min-width: 700px) {
    min-width: 200px;
  }

  @media (max-width: 700px) {
    min-width: 140px;
    background-position: 50%;
  }
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.6);
  position: relative;
  z-index:1;
  background-color: green;
  margin-right:40px;
  background-image: url(${props => props.image});
  background-size:cover;
`;

const CarouselContainer = styled.div`
  flex: 4;
  width: 80%; 
`;