import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Box";
import Link from "next/link";
import { useRouter } from "next/navigation";

function RegisterForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };
  function generateRandomUserId() {
    const prefix = 'UI';
    const digits = Math.random().toString().substr(2, 9); // Generate 9 random digits
    
    return prefix + digits;
}
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userid=generateRandomUserId();
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userid, username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful');
        router.push("/userlogin");
        // Handle successful registration (e.g., redirect to login)
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <MainContainer>
      <HeaderFlex1>
        <Header>{props.who} REGISTER</Header>
      </HeaderFlex1>
      <BoxesFlex2>
        <Box
          header="username"
          type="text"
          placeholder="Enter your username"
          onChange={handleUsernameChange} // Pass onChange handlers
        />
        <Box
          header="password"
          type="password"
          placeholder="Enter your password"
          onChange={handlePasswordChange} // Pass onChange handlers
        />
        <Box
          header="confirm password"
          type="password"
          placeholder="Retype your password"
          onChange={handleConfirmPasswordChange} // Pass onChange handlers
        />
      </BoxesFlex2>
      <ButtonsFlex3>
        <FormButtonGhost onClick={handleSubmit}>
          <p>Submit</p>
        </FormButtonGhost>
        <Link href="/userlogin">
          <FormButtonNG>
            <p>Login</p>
          </FormButtonNG>
        </Link>
      </ButtonsFlex3>
    </MainContainer>
  );
}

export default RegisterForm;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeaderFlex1 = styled.div`
  color: #ff0065;
  text-align: center;
  flex: 1;
  width: 100%;
`;

const Header = styled.p`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 600;
  margin: 0;
`;

const BoxesFlex2 = styled.div`
  flex: 1;
  width: 100%;
  margin: 25px 0px;
`;

const ButtonsFlex3 = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin: 25px 0px;
`;

const FormButtonGhost = styled.div`
  border-radius: 20px;
  background-color: #ff0065;
  text-align: center;
  padding: 5px 20px;
  margin-right: 5px;
  border: 1px solid white;
  flex: 1;
  cursor: pointer;
  > p {
    color: white;
    padding: 0;
    margin: 0;
  }
`;

const FormButtonNG = styled.div`
  border-radius: 20px;
  padding: 5px 20px;
  background-color: white;
  text-align: center;
  border: 1px solid #ff0065;
  flex: 1;
  cursor: pointer;
  > p {
    color: #ff0065;
    padding: 0;
    margin: 0;
  }
`;
