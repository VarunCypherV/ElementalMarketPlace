import React from "react";
import styled from "styled-components";
import Box from "./Box";

function BusinessRegisterForm() {
  return (
    <MainContainer>
      <HeaderText>Business Register</HeaderText>
      <FlexHorizontal>
        <FHBox><Box header="username" type="text" placeholder="Enter username" /></FHBox>
        <FHBox><Box header="phone" type="text" placeholder="Enter phone number" /></FHBox>
      </FlexHorizontal>
      <FlexHorizontal>
        <FHBox><Box header="email" type="text" placeholder="Enteremail" /></FHBox>
        <FHBox><Box header="address" type="text" placeholder="Enter address" /></FHBox>
      </FlexHorizontal>
      <FlexHorizontal>
        <FHBox><Box header="company name" type="text" placeholder="Enter company name" /></FHBox>
        <FHBox><Box header="company address" type="text" placeholder="Enter company address" /></FHBox>
      </FlexHorizontal>
      <FlexHorizontal>
        <FHBox><Box header="id proof Upload" type="text" placeholder="Enter your username" /></FHBox>
        <FHBox><Box header="bank account" type="text" placeholder="Enter bank account details" /></FHBox>
      </FlexHorizontal>
      <FlexHorizontal>
        <FHBox><Box header="GST Number" type="text" placeholder="Enter GST Number" /></FHBox>
        <FHBox><Box header="product categories" type="text" placeholder="Choose Product categories" /></FHBox>
        
      </FlexHorizontal>
    </MainContainer>
  );
}

export default BusinessRegisterForm;

const MainContainer = styled.div`
  display: flex;
  flex-direction:  column;
`;
const HeaderText = styled.p`
  text-align:center;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 600;
  color: #ff0065;
  margin:25px;
`;
const FlexHorizontal = styled.div`
  flex: 1;
  display: flex;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 600;
  margin:0;
`;
const FHBox = styled.div`
  flex: 1;
  margin-left:25px;
  margin-right:25px;
`;
