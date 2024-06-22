'use client'
import Image from 'next/image'
import React from "react";
import styled from "styled-components";

function FilterButton(props) {
  return (
    <MainContainer>
      <Ham>
        <Image src="/assets/Components/hamburger.png"  width={500} height={500}/>
      </Ham>
      <Option>
        <p>{props.filter}</p>
      </Option>
    </MainContainer>
  );
}

export default FilterButton;

const MainContainer = styled.div`
  background-color: #ff0065;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:5px 20px;
  max-height: 30px;
`;

const Ham = styled.div`
  flex: 1;
  margin-right:2px;
`;

const Option = styled.div`
  flex: 1;
  >p{
    margin:0;
    padding:0;
    font-family: "merienda";
    color:white;
    font-weight:600;
    font-size:12px;
  }
`;
