import React, { useState } from "react";
import Layouts from "../layouts/Layouts";
import styled from "styled-components";
import Filters from "../components/Filters";
import StickyBox from "react-sticky-box";
function CategoryPage() {
  const itemsArray = Array.from({ length: 100 }, (_, index) => (
    <p key={index}>Content {index + 1}</p>
  ));

  return (
    <Layouts>
      <MainContainer>
        <HeaderText>Category New Arrivals</HeaderText>
        <Content>
          <FiltersContainer>
            <StickyBox offsetTop={0} offsetBottom={0}>
              <Filters />
            </StickyBox>
          </FiltersContainer>

          <Items>{itemsArray}</Items>
        </Content>
      </MainContainer>
    </Layouts>
  );
}

export default CategoryPage;

const MainContainer = styled.div``;
const HeaderText = styled.div`
  padding: 50px;
  font-size: 32px;
  color: #ff0065;
  font-family: "merienda";
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const Items = styled.div``;

const FiltersContainer = styled.div``;
