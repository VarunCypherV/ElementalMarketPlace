import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/LoginReg/bgelemental.png";
import { StaticImage } from "gatsby-plugin-image";
import LoginForm from "../../components/LoginForm";

const UserLogin = () => {
  return (
    <MainContainer>
      <LoginContainer>
        <ImageFlex1>
          <StaticImage src="../../assets/LoginReg/Logo.png" alt="company logo" />
        </ImageFlex1>
        <Formflex3>
          <LoginForm who="USER" />
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
