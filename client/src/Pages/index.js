import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import HomePage from "./Landing/Home";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <IndexMain>
        <HomePage/>
      </IndexMain>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;


const IndexMain = styled.div`
  margin: 0;
  padding: 0;
`;
