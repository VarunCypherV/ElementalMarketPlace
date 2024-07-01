import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Box";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Store the JWT token
        localStorage.setItem('token', token);

        // Navigate to the home page on successful login
        router.push('/home2');
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <MainContainer>
      <HeaderFlex1>
        <Header>{props.who} LOGIN</Header>
      </HeaderFlex1>
      <BoxesFlex2>
        <Box 
          header="username" 
          type="text" 
          placeholder="Enter your username" 
          value={username}
          onChange={handleUsernameChange} // Pass onChange handlers
        />
        <Box
          header="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange} // Pass onChange handlers
        />
      </BoxesFlex2>
      <ButtonsFlex3>
        <FormButtonGhost onClick={handleLogin}>
          <p>Submit</p>
        </FormButtonGhost>
        <Link href="/userregister">
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
  width: 100%;
`;

const HeaderFlex1 = styled.div`
  color: #ff0065;
  text-align: center;
  flex:1;
  width: 100%;
`;

const Header = styled.p`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 600;
  margin:0;
`;

const BoxesFlex2 = styled.div`
  flex:1;
  width: 100%;
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
  cursor: pointer;

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
  cursor: pointer;

  > p {
    color: #FF0065;
    padding:0;
    margin:0;
  }
`;
