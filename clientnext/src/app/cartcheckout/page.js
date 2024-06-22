'use client'
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DropdownComp } from "../components/DropDown";
import AddOn from "../components/AddOn";
import PaymentOptions from "../components/PaymentOptions";
import Image from 'next/image'
import Layout1 from "../layouts/Layout1";

function CartAndCheckoutPage() {
  const items = [
    {
      name: "CEAT (No- 6) Poplar Willow Cricket Bat",
      quantity: 2,
      price: 10,
      itemId: 122342342,
    },
    {
      name: "Example Item 2",
      quantity: 3,
      price: 15,
      itemId: 987654321,
    },
    {
      name: "Another Item",
      quantity: 1,
      price: 20,
      itemId: 567890123,
    },
  ];
  const [TotalQuantity, setTotalQuantity] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let quantity = 0;
    let price = 0;

    items.forEach((item) => {
      quantity += item.quantity;
      price += item.quantity * item.price;
    });

    setTotalQuantity(quantity);
    setTotalPrice(price);
  }, [items]);
  return (
    <Layout1>
      <MainContainer>
        <HeaderText>YOUR CART AND CHECKOUT</HeaderText>
        <DetailsContainer>
          <OrderSummary>
            <h1>Order Summary</h1>
            <Row>
              <Row1>
                <h3>Product</h3>
                <br />
              </Row1>
              <Row2>
                <h3> Quantity</h3>
                <br />
              </Row2>
              <Row3>
                <h3>Price</h3>
                <br />
              </Row3>
            </Row>
            {items.map((item, index) => (
              <RowContent key={index}>
                <RowC1>
                  <h3>{item.name}</h3>
                  <br />
                </RowC1>
                <RowC2>
                  <h3>{item.quantity}</h3>
                  <br />
                </RowC2>
                <RowC3>
                  <h3>{item.price}</h3>
                  <br />
                </RowC3>
              </RowContent>
            ))}

            <SummarySection>
              <hr />
              <Summary>
                <Row>
                  <Row1>
                    <h3>Total Purchase Value :</h3>
                    <br />
                  </Row1>
                  <Row2>
                    <h3>{TotalQuantity}</h3>
                    <br />
                  </Row2>
                  <Row3>
                    <h3>{TotalPrice}</h3>
                    <br />
                  </Row3>
                </Row>
              </Summary>
            </SummarySection>
          </OrderSummary>
          <PaymentsAndBilling>
            <h1>Payment And Billing</h1>
            <DropdownComp
              options={["Address1", "Address2", "Address3"]}
              OutsideBoxText="Delivery Address"
              InsideBox="Select Your Delivery Address"
            />
            <br />
            <AddOn OutsideBoxText="Add Coupon" />
            <h3>Payment Method</h3>
            <PaymentOptions />
            <CheckoutButton>
              <h1>Proceed To Checkout</h1>
              <ChkImage>
                <Image src="/assets/Components/Bag.png" width={500} height={500} />
              </ChkImage>
            </CheckoutButton>
          </PaymentsAndBilling>
        </DetailsContainer>
      </MainContainer>
    </Layout1>
  );
}

export default CartAndCheckoutPage;

const HeaderText = styled.div`
  font-size: 32px;
  color: #ff0065;
  font-family: "merienda";
  font-weight: 600;
`;

const MainContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-bottom:50px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 25px;
`;

const OrderSummary = styled.div`
  background-color: #ffdef4;
  flex: 1;
  padding: 0px 25px;
  margin-right: 25px;
  > h1 {
    font-size: 32px;
    font-family: "merienda";
    font-weight: 600;
    color: #ff0065;
  }
`;

const PaymentsAndBilling = styled.div`
  background-color: #ff0065;
  flex: 1;
  padding-left: 25px;
  padding-right: 25px;
  > h1 {
    font-size: 32px;
    font-family: "merienda";
    font-weight: 600;
    color: white;
  }
  > h3 {
    font-size: 16px;
    font-family: "merienda";
    font-weight: 600;
    color: white;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Row1 = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  > h3 {
    font-size: 18px;
    font-family: "merienda";
    font-weight: 800;
    color: black;
  }
`;
const Row2 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  > h3 {
    font-size: 18px;
    font-family: "merienda";
    font-weight: 800;
    color: black;
  }
`;
const Row3 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  > h3 {
    font-size: 18px;
    font-family: "merienda";
    font-weight: 800;
    color: black;
  }
`;

const RowContent = styled.div`
  display: flex;
  flex-direction: row;
`;
const RowC1 = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  > h3 {
    font-size: 14px;
    font-family: "merienda";
    font-weight: 600;
    color: black;
  }
`;
const RowC2 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  > h3 {
    font-size: 14px;
    font-family: "merienda";
    font-weight: 600;
    color: black;
  }
`;

const RowC3 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  > h3 {
    font-size: 14px;
    font-family: "merienda";
    font-weight: 600;
    color: black;
  }
`;
const Summary = styled.div`
  align-self: flex-end;
`;

const CheckoutButton = styled.div`
  display: inline-flex;
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: #ffdef4;
  flex-direction: row;
  padding: 10px 15px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  > h1 {
    margin: 0;
    font-size: 20px;
    color: #ff0065;
    font-family: "Merienda";
    font-weight: 600px;
  }
`;

const ChkImage = styled.div`
  margin-left: 15px;
`;

const SummarySection = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
`;
