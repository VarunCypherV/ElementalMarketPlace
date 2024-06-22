'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from "react";
import styled from "styled-components";

function Filters() {
  return (
    <MainContainer>
      <HeaderText>RESULT FILTERS</HeaderText>
      <PriceContainer>
        <h1>Price</h1>
        <Link href="#"> - No Filter </Link>
        <Link href="#"> - Under ₹500 </Link>
        <Link href="#"> - ₹500 to ₹1,000 </Link>
        <Link href="#"> - ₹1,000 to ₹2,000 </Link>
        <Link href="#"> - ₹2,000 to ₹5,000 </Link>
        <Link href="#"> - ₹5,000 and Above </Link>
      </PriceContainer>
      <DiscountContainer>
        <h1>Discount and Sales</h1>
        <Link href="#"> - No Filter </Link>
        <Link href="#"> - Elemental Origin Sale </Link>
        <Link href="#"> - Black Friday Sale </Link>
        <Link href="#"> - 10% off or more </Link>
        <Link href="#"> - 25% off or more </Link>
        <Link href="#"> - 50% off or more </Link>
        <Link href="#"> - 75% off or more </Link>
      </DiscountContainer>
      <CustomerReviewContainer>
        <h1>Customer Reviews</h1>
        <Link href="#">No Filter</Link>
        <Link href="#"><Image src="/assets/Components/5star.png" width={500} height={500} /> </Link>
        <Link href="#"><Image src="/assets/Components/4star.png" width={500} height={500} /> </Link>
        <Link href="#"> <Image src="/assets/Components/3star.png" width={500} height={500} /> </Link>
        <Link href="#"> <Image src="/assets/Components/2star.png" width={500} height={500} /> </Link>
        <Link href="#"> <Image src="/assets/Components/1star.png" width={500} height={500} /> </Link>
      </CustomerReviewContainer>
      <SortContainer>
        <AscendingButton>
          <p>Ascending</p>
        </AscendingButton>
        <DescendingButton>
          <p>Descending</p>
        </DescendingButton>
      </SortContainer>
    </MainContainer>
  );
}

export default Filters;

const MainContainer = styled.div`
  background-color: #ffedf4;
  max-width: 15vw;
  padding: 25px;
  min-width: 140px;
`;

const HeaderText = styled.div`
  color: #ff0065;
  font-size: 18px;
  font-weight: 600;
  font-family: "Merienda";
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > h1 {
    font-size: 14px;
    font-family: "Merienda";
    margin: 0;
  }
  > a {
    font-size: 12px;
    font-family: "Merienda";
    font-weight: 400;
    line-height: 23px;
  }
`;
const DiscountContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > h1 {
    font-size: 14px;
    font-family: "Merienda";
    margin: 0;
  }
  > a {
    font-size: 12px;
    font-family: "Merienda";
    font-weight: 400;
    line-height: 23px;
  }
`;

const CustomerReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > h1 {
    font-size: 14px;
    font-family: "Merienda";
    margin: 0;
  }
  > a {
    font-size: 12px;
    font-family: "Merienda";
    font-weight: 400;
    line-height: 23px;
  }
`;
const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > h1 {
    font-size: 14px;
    font-family: "Merienda";
    margin: 0;
  }
  > a {
    font-size: 12px;
    font-family: "Merienda";
    font-weight: 400;
    line-height: 23px;
  }
`;

const AscendingButton = styled.div`
  background-color: #FF0065;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
  padding: 5px;
  text-align: center;
  >p {
    color:white;
    margin:0;
    font-size: 14px;
  }
  margin-bottom: 10px;
`;

const DescendingButton = styled.div`
  background-color: #FF0065;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
  padding: 5px;
  text-align: center;
  >p {
    color:white;
    margin:0;
    font-size: 14px;
  }
  margin-bottom: 10px;
`;
