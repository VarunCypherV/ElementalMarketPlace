"use client";

import React, { useEffect, useState } from "react";
import Layout1 from "../layouts/Layout1";
import styled from "styled-components";
import Filters from "../components/Filters";
import StickyBox from "react-sticky-box";
import Card from "../components/Card";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import from next/navigation

function CategoryPage() {
  const [items, setItems] = useState([]);
  const type = localStorage.getItem("category");
  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (type) {
          const response = await axios.get(
            `http://localhost:3000/tagcard/tagitems?tagname=${type}`
          );
          setItems(response.data);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [type]);

  return (
    <Layout1>
      <MainContainer>
        <HeaderText>
          Category: <span id="CatName">{type}</span>
        </HeaderText>
        <Content>
          <FiltersContainer>
            <StickyBox offsetTop={0} offsetBottom={0}>
              <Filters />
            </StickyBox>
          </FiltersContainer>
          <Items>
            {items.map((item) => (
              <CardContainer key={item.id}>
                <Card
                  sp={item.attributes.SP}
                  cp={item.attributes.CP}
                  name={item.attributes.Name}
                  description={item.attributes.Description}
                  features={item.attributes.Features}
                  image={
                    "http://localhost:1337" +
                    item.attributes.Images.data[0].attributes.url
                  }
                  offer="true"
                  offerpercent="70% Off"
                  mrp="₹1179"
                />
              </CardContainer>
            ))}
          </Items>
        </Content>
      </MainContainer>
    </Layout1>
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
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FiltersContainer = styled.div`
  margin-right: 25px;
  flex-shrink: 0;
`;

const CardContainer = styled.div`
  margin: 10px;
`;
