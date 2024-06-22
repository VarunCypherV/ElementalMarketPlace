'use client'
import React from "react";
import styled from "styled-components";
import Rating from "./Rating";
import Image from 'next/image'

function Card(props) {
  return (
    <MainContainer>
    {props.deal?<Tag>{props.deal}
     </Tag>:null }
     
      <ImageSec imageUrl={props.image} />
      <DetailsSec>
        <Name>
          <p>{props.name}</p>
        </Name>
        <RatingContainer>
          <Rating stars="2" number="19238" />
        </RatingContainer>
        <PriceAndButtons>
          <Price>
            <SellingPrice>{props.sp}</SellingPrice>
            {props.offer ? (
              <OriginalPrice>
                <Striked>{props.mrp}</Striked>
                <OfferPercent>{props.offerpercent}</OfferPercent>
              </OriginalPrice>
            ) : null}
          </Price>
          <Buttons>
            <div>
            <Image
              src="/assets/Components/BasketWhite.png"
              alt="Basket Image"
              width={500} height={500}
            />
            </div>
            
          </Buttons>
        </PriceAndButtons>
      </DetailsSec>
    </MainContainer>
  );
}

export default Card;

const MainContainer = styled.div`
  width: 240px;
  height: 240px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.6);
  position: relative;
`;

const ImageSec = styled.div`
  flex: 6;
  background-color: white;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
`;

const DetailsSec = styled.div`
  flex: 2;
  background-color: #ececec;
`;

const Name = styled.div`
  color: black;
  margin: 5px 10px;
  font-size: 14px;
  font-family: "merienda";
  font-weight: 700;
`;

const PriceAndButtons = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Price = styled.div`
  flex: 6;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  flex: 1;
  background-color: #ff0065;
  border-bottom-right-radius: 40px;
  border-top-left-radius: 40px;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  align-self: flex-end;
  padding: 10px;
  >div{
    margin-left:4px;
  }
`;

const Striked = styled.span`
  text-decoration: line-through;
  font-size: 12px;
  font-family: "merienda";
  font-weight: 700;
  color: #ff0000;
`;

const SellingPrice = styled.div`
  font-size: 14px;
  font-family: "merienda";
  font-weight: 700;
`;
const OriginalPrice = styled.div`
  display: flex;
  flex-direction: row;
`;
const OfferPercent = styled.div`
  font-size: 14px;
  font-family: "merienda";
  font-weight: 700;
  margin-left: 5px;
  color: #ff0065;
`;
const RatingContainer = styled.div`
  margin-left: 10px;
  margin-bottom: 5px;
`;


const MoveToCartButoon = styled.div`
`;

const Tag = styled.div`
  position: absolute;
  top: 0px; /* Adjust this value to your preference */
  right: 0px; /* Adjust this value to your preference */
  background-color: #ff0065;
  font-size: 12px;
  color: white;
  font-family: "merienda";
  padding: 2px 10px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;