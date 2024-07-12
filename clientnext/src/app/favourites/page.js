'use client'
import Layout1 from "../layouts/Layout1";
import styled from "styled-components";
import Card from "../components/Card";
import FilterButton from "../components/FilterButton";
import axios from "axios";
import { useEffect, useState } from "react";

function FavouritePage() {
  const [itemsDetails, setItemsDetails] = useState([]);

  useEffect(() => {
    async function fetchFavourites() {
      try {
        const userid = localStorage.getItem('id');
        const response = await axios.get(`http://localhost:3000/userDeets/getFav?userid=${userid}`); // Replace with your API endpoint

        setItemsDetails(response.data.Favourites);
        console.log(itemsDetails)
      } catch (error) {
        console.error("Error fetching favourites:", error);
      }
    }

    fetchFavourites();
  }, []);

  return (
    <Layout1>
      <MainContainer>
        <HeaderSection>
          <Title>Favourites : Loved by you</Title>
          {/* <Filters>
            <p>Search Filters</p>
            <FilterButton filter="Sort" />
            <FilterButton filter="Price" />
            <FilterButton filter="Offers" />
            <FilterButton filter="Review" />
          </Filters> */}
        </HeaderSection>
        <Items>
          {itemsDetails.map((item) => (
            <CardContainer key={item.id}>
              <Card
                offer="true"
                offerpercent="70% Off"
                mrp={`₹${item.attributes.CP}`}
                sp={`₹${item.attributes.SP}`}
                name={item.attributes.Name}
                image={"http://localhost:1337"+item.attributes.Images.data[0].attributes.url} // Adjust according to your API response structure
              />
            </CardContainer>
          ))}
        </Items>
      </MainContainer>
    </Layout1>
  );
}

export default FavouritePage;

const MainContainer = styled.div``;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
`;

const HeaderSection = styled.div`
  background-color: #ffedf4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  > p {
    font-size: 16px;
    color: #ff0065;
    font-family: "merienda";
    font-weight: 600;
  }
`;

const Title = styled.div`
  font-size: 32px;
  color: #ff0065;
  font-family: "merienda";
  font-weight: 600;
  margin-right: 20px;
`;

const CardContainer = styled.div`
  margin: 20px;
`;
