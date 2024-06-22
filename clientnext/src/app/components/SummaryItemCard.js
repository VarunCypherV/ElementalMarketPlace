'use client'
import Image from 'next/image'
import React from "react";
import styled from "styled-components";

function SummaryItemCard(props) {
  return (
    <MainContainer>
      <TextDetails>
      <GridContainer status={props.Status} delivery={props.Delivery}>
          <div>
            Ordered Date: <span id="OrderedDate">{props.OrderedDate}</span>
          </div>
          <div>
            Order Value: <span id="OrderedValue">{props.OrderValue}</span>
          </div>
          <div>
            Invoice Id: <span id="InvoiceId">{props.InvoiceId}</span>
          </div>
          <div>
            Payment Method:{" "}
            <span id="PaymentMethod">{props.PaymentMethod}</span>
          </div>

          <div>
            Name: <span id="Name">{props.Name}</span>
          </div>
          <div className="shipping-address">
            Shipping Address:{" "}
            <span id="ShippingAddress">{props.ShippingAddress}</span>
          </div>
          <ButtonContainer>
            <Button>
              <p>Action</p>
            </Button>
          </ButtonContainer>

          <div>
            Product: <span id="Product">{props.Product}</span>
          </div>
          <div>
            Status:{" "}
            <span id="Status" status={props.Status}>
              {props.Status}
            </span>
          </div>
          <div className="expected-delivery">
            Expected Date Of Delivery:{" "}
            <span id="ExpectedDateOfDelivery" delivery={props.Delivery}>
              {props.ExpectedDateOfDelivery}
            </span>
          </div>
        </GridContainer>
      </TextDetails>
      <ImageContainer>
        <Image src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL.jpg" alt="Product Image" width={500} height={500}/>
      </ImageContainer>
    </MainContainer>
  );
}

export default SummaryItemCard;

const MainContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: #ffdef4;
`;

const TextDetails = styled.div`
  flex: 7;
  margin-right: 50px;
`;

const ImageContainer = styled.div`
  flex: 1;
  box-shadow: 0px 1px 3px 2px rgba(255, 0, 101, 0.3);

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 20px;

  & > div {
    font-size: 18px;
    font-family: "merienda";
    color: black;
    font-weight: 600;
    padding:5px;
  }

  .shipping-address {
    grid-column: span 2;
  }

  .expected-delivery {
    grid-column: span 2;
  }

  span#Status {
    color: ${(props) => {
      switch (props.status) {
        case "Dispatched":
          return "blue";
        case "Import Transit":
          return "red";
        case "Warehouse":
          return "orange";
        case "Delivered":
          return "green";
        default:
          return "inherit";
      }
    }};
  }

  span#ExpectedDateOfDelivery {
    color: ${(props) => {
      switch (props.delivery) {
        case "onTime":
          return "green";
        case "Delayed":
          return "red";
        default:
          return "inherit";
      }
    }};
  }
`;

const ButtonContainer = styled.div`
  grid-column: 4;
  display: flex;
`;

const Button = styled.div`
  background-color: #ff0065;
  padding: 5px 20px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border: 1px solid;
  > p {
    font-size: 14px;
    color: white;
    margin: 0;
  }
`;
