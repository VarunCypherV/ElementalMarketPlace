'use client'
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';


function Rating({ stars, number, altText }) {
  let imageSrc;

  switch (stars) {
    case "1":
      imageSrc = "/assets/Components/1Star.png";
      break;
    case "2":
      imageSrc = '/assets/Components/2Star.png';
      break;
    case "3":
      imageSrc = '/assets/Components/3Star.png';
      break;
    case "4":
      imageSrc = '/assets/Components/4Star.png';
      break;
    case "5":
      imageSrc = '/assets/Components/5Star.png';
      break;
    default:
      break;
  }

  return (
    <MainContainer>
      <Stars>
        {imageSrc && <Image src={imageSrc} alt={altText} width={24} height={24} />}
      </Stars>
      <Number>({number})</Number>
    </MainContainer>
  );
}

export default Rating;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Stars = styled.div`
  /* flex: 1; */
`;

const Number = styled.div`
  margin-left: 10px;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 700;
`;
