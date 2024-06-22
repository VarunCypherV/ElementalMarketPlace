import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import ItemPage from "./ItemPage";
import Home from "./Home";

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <IndexMain>
        {/* <ItemPage /> */}
        <Home/>
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

