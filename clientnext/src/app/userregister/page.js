'use client'
import React from "react";
import styled from "styled-components";
import Image from 'next/image'
import RegisterForm from "../components/RegisterForm";


const UserLogin = () => {
  return (
    <MainContainer>
      <LoginContainer>
        <ImageFlex1>
          <Image src="/assets/LoginReg/Logo.png" alt="A dinosaur" width={500} height={500}/>
        </ImageFlex1>
        <Formflex3>
          <RegisterForm who="USER"/>
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
  max-width: 25%;
  min-width:300px;
  height: 100vh;
  clip-path: ellipse(100% 100% at left);
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
  height:50%;
  width: 50%;
`;

const Formflex3 = styled.div`
  flex: 3;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding-bottom: 30%;
`;

export default UserLogin;
