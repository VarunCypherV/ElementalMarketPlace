"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DropdownComp } from "../components/DropDown";
import AddOn from "../components/AddOn";
import Image from "next/image";
import Layout1 from "../layouts/Layout1";
import axios from "axios";
import Stripe from "../components/stripe";

function CartAndCheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponManipulate, setcouponManipulate] = useState(null);
  const [displayPrice, setDisplayPrice] = useState(0);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userid = localStorage.getItem("id");
        console.log(`http://localhost:3000/userDeets/getCart?userid=${userid}`)
        const response = await axios.get(
          `http://localhost:3000/userDeets/getCart?userid=${userid}`
        );
        const cartData = response.data.cart.map((item) => ({
          ...item,
          quantity: 1, // Initialize quantity for each item
        }));
        setCartItems(cartData);
        console.log(userid)
        // const addressResponse = await axios.get(
        //   `http://localhost:3000/userDeets/addresses/userid=${userid}`
        // );
        // setAddresses(addressResponse.data.addresses);

        // Calculate total quantity and total price
        let quantity = cartData.reduce(
          (total, item) => total + item.quantity,
          0
        ); // Calculate total quantity
        let price = cartData.reduce(
          (total, item) => total + item.attributes.SP * item.quantity,0
        ); // Calculate total price

        setTotalQuantity(quantity);
        setTotalPrice(price);
        setDisplayPrice(price);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state here
      }
    };

    fetchData();
  }, []);

  const increaseQuantity = (index) => {
    // Increase quantity logic
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1; // Assuming each item can have a quantity property
    setCartItems(updatedCart);

    // Recalculate total quantity and total price
    const newQuantity = totalQuantity + 1;
    const newPrice = displayPrice + updatedCart[index].attributes.SP;
    setTotalQuantity(newQuantity);
    setDisplayPrice(newPrice);

    setTotalPrice(newPrice);
  };

  const decreaseQuantity = (index) => {
    // Decrease quantity logic
    if (cartItems[index].quantity > 1) {
      const updatedCart = [...cartItems];
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);

      // Recalculate total quantity and total price
      const newQuantity = totalQuantity - 1;
      const newPrice = displayPrice - updatedCart[index].attributes.SP;
      setTotalQuantity(newQuantity);
      setDisplayPrice(newPrice);

      setTotalPrice(newPrice);
    }
  };

  const handleAddCoupon = async (couponCode) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/market/coupons?Usercode=${couponCode}`
      );
      if (response.status === 200) {
        const { PercentOff, AmountOff } = response.data.coupon.attributes;
        if (PercentOff !== null) {
          const discount = (totalPrice * PercentOff) / 100;
          setDisplayPrice(totalPrice - discount);
        } else if (AmountOff !== null) {
          setDisplayPrice(totalPrice - AmountOff);
        }
      } else {
        console.error("Failed to apply coupon");
        // Handle error state if needed
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      // Handle error state here
    }
  };

  const handleRemoveCoupon = async (couponCode) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/market/coupons?Usercode=${couponCode}`
      );
      if (response.status === 200) {
        const { PercentOff, AmountOff } = response.data.coupon.attributes;
        if (PercentOff !== null) {
          const discount = (totalPrice * PercentOff) / 100;
          setDisplayPrice(displayPrice + discount);
        } else if (AmountOff !== null) {
          setDisplayPrice(displayPrice + AmountOff);
        }
      } else {
        console.error("Failed to apply coupon");
        // Handle error state if needed
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      // Handle error state here
    }
  };

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
                <h3>Quantity</h3>
                <br />
              </Row2>
              <Row3>
                <h3>Price</h3>
                <br />
              </Row3>
            </Row>
            {cartItems.map((item, index) => (
              <RowContent key={item.id}>
                <RowC1>
                  <h3>{item.attributes.Name}</h3>
                  <br />
                </RowC1>
                <RowC2>
                  {/* Quantity adjustment buttons */}
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <h3>{item.quantity}</h3>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                  <br />
                </RowC2>
                <RowC3>
                  <h3>{item.attributes.SP}</h3>
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
                    <h3>{totalQuantity}</h3>
                    <br />
                  </Row2>
                  <Row3>
                    <h3>{displayPrice}</h3>
                    <br />
                  </Row3>
                </Row>
              </Summary>
            </SummarySection>
          </OrderSummary>
          <PaymentsAndBilling>
            <h1>Payment And Billing</h1>
            <DropdownComp
              options={addresses}
              OutsideBoxText="Delivery Address"
              InsideBox="Select Your Delivery Address"
            />

            <br />
            <AddOn
              OutsideBoxText="Add Coupon"
              onAddCoupon={handleAddCoupon}
              onRemoveCoupon={handleRemoveCoupon}
            />
            <Stripe/>
            <CheckoutButton>
              <h1>Proceed To Checkout</h1>
              <ChkImage>
                <Image
                  src="/assets/Components/Bag.png"
                  width={25}
                  height={25}
                />
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
  margin-bottom: 50px;
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
