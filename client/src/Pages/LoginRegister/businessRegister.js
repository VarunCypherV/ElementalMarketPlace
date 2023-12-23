import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/LoginReg/bgelemental.png";
import { StaticImage } from "gatsby-plugin-image";
import LoginForm from "../../components/LoginForm";
import BusinessRegisterForm from "../../components/BusinessRegisterForm";

const BusinessRegister = () => {
  return (
    <MainContainer>
      <LoginContainer>
        <ImageFlex1>
          <StaticImage src="../../assets/LoginReg/Logo.png" alt="Elemental" />
        </ImageFlex1>
        <Formflex3>
          <BusinessRegisterForm/>
        </Formflex3>
      </LoginContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-image: url(${backgroundImage});
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
