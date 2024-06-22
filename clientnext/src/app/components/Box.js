'use client'
import React from 'react';
import styled from 'styled-components';

function Box(props) {
  return (
    <MainContainer>
      <Boxheader>{props.header}</Boxheader>
      <InputField type={props.type} placeholder={props.placeholder} />
    </MainContainer>
  );
}

export default Box;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Boxheader = styled.p`
  color: #ff0065;
  font-size: 12px;
  margin-left: 5px;
  font-family:"Montserrat";
  margin-bottom:0;
  font-weight: bold;

`;

const InputField = styled.input`
  /* width: 100%; */
  padding: 8px;
  border: 1px solid;
  border-color: #FF0065;
  border-radius: 50px;
  margin-top: 2px;
  &:focus {
    outline: none;
    border-color: #FF0065;
  }
  &::placeholder {
    color: #FF0065; 
    font-size: 12px;
    opacity: 0.6;
  }

  &:focus::placeholder {
    color: #FF0065;
  }

`;
