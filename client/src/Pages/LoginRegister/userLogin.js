import React from "react";
import { styled } from '@mui/system';

// Import the background image
import bgImage from '../../assets/bg1.png';

function UserLogin() {
  return (
    <UL>
      <p>https://www.apollographql.com/docs/react/get-started</p>
      <br />
      <p>userLogin</p>
    </UL>
  );
}

export default UserLogin;

const UL = styled('div')({
  height: '100vh',
  backgroundImage: `url(${bgImage})`, // Use the imported background image
  overflowX: 'hidden',
});
