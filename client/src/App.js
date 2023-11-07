// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';
import { useLazyQuery } from '@apollo/client';
import UserLogin from './Pages/LoginRegister/UserLogin';

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin/>}/>
          </Routes>
        </BrowserRouter>
  );
}