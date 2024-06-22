import React from "react";
import styled from "styled-components";
import Box from "./Box";
import { Link } from "gatsby";

function LoginForm(props) {
  return (
    <MainContainer>
      <HeaderFlex1>
        <Header>{props.who} LOGIN</Header>
      </HeaderFlex1>
      <BoxesFlex2>
        <Box header="username" type="text" placeholder="Enter your username" />
        <Box
          header="password"
          type="password"
          placeholder="Enter your password"
        />
      </BoxesFlex2>
      <ButtonsFlex3>
        {/* <FormButtonGhost>
            <p>Submit</p>
        </FormButtonGhost>
        <FormButtonNG>
            <p>Register</p>
        </FormButtonNG> */}
        <Link to="/Home"> {/* Use Link component to navigate to /Home */}
          <FormButtonGhost>
            <p>Submit</p>
          </FormButtonGhost>
        </Link>
        <Link to="/Home"> {/* Use Link component to navigate to /Home */}
          <FormButtonNG>
            <p>Register</p>
          </FormButtonNG>
        </Link>
      </ButtonsFlex3>
    </MainContainer>
  );
}

export default LoginForm;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Make sure it takes full width */
`;




const HeaderFlex1 = styled.div`
  color: #ff0065;
  text-align: center;
  flex:1;
  width: 100%; /* Make sure it takes full width */
`;

const Header = styled.p`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 600;
  margin:0;
`;

const BoxesFlex2 = styled.div`
flex:1;
width: 100%; /* Make sure it takes full width */
margin: 25px 0px;
`;

const ButtonsFlex3 = styled.div`
  display: flex;
  flex:1;
  justify-content: space-around;
  margin: 25px 0px;
`;


const FormButtonGhost = styled.div`
  border-radius: 20px;
  background-color: #FF0065;
  text-align: center;
  padding: 5px 20px;
  margin-right:5px;
  border: 1px solid white;
  flex: 1;
  /* margin-right: 10px; Margin between buttons */
  > p {
    color: white;
    padding:0;
    margin:0;
  }
`;

const FormButtonNG = styled.div`
  border-radius: 20px;
  padding: 5px 20px;
  background-color: white;
  text-align: center;
  border: 1px solid #FF0065;
  flex: 1;
  > p {
    color: #FF0065;
    padding:0;
    margin:0;
  }
`;
