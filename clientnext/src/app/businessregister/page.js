'use client'
import React from "react";
import styled from "styled-components";
import Image from 'next/image'
import BusinessRegisterForm from "../components/BusinessRegisterForm";

const BusinessRegister = () => {
  return (
    <MainContainer>
      <LoginContainer>
        <ImageFlex1>
          <Image src="/assets/LoginReg/Logo.png" alt="Elemental" width={500} height={500} />
        </ImageFlex1>
        <Formflex3>
          <BusinessRegisterForm/>
        </Formflex3>
      </LoginContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-image: url("/assets/LoginReg/bgelemental.png");
  background-size: cover;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const LoginContainer = styled.div`
  background-color: #ffdef4;
  max-width: 40%;
  min-width:450px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
`;

const ImageFlex1 = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height:25%;
  width:25%;
`;

const Formflex3 = styled.div`
  flex: 3;
  padding-bottom: 10%;
`;

export default BusinessRegister ;
