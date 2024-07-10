'use client'
import Image from 'next/image'
import React, { useState } from "react";
import styled from "styled-components";

const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelection = (method) => {
    setSelectedMethod(selectedMethod === method ? "" : method);
  };

  return (
    <MethodsContainer>
      <Method>
        <input
          type="checkbox"
          id="creditCard"
          checked={selectedMethod === "creditCard"}
          onChange={() => handleSelection("creditCard")}
          style={{ display: "none" }}
        />
        <label htmlFor="creditCard">
          Credit Card / Debit Card
          <span
            className={`icon ${
              selectedMethod === "creditCard" ? "selectedIcon" : "defaultIcon"
            }`}
          >
            <Image src="/assets/Components/tick.png" width={25} height={25} />
          </span>
        </label>
      </Method>
      <Method>
        <input
          type="checkbox"
          id="netBanking"
          checked={selectedMethod === "netBanking"}
          onChange={() => handleSelection("netBanking")}
          style={{ display: "none" }}
        />
        <label htmlFor="netBanking">
          NetBanking
          <span
            className={`icon ${
              selectedMethod === "netBanking" ? "selectedIcon" : "defaultIcon"
            }`}
          >
            <Image src="/assets/Components/tick.png"  width={25} height={25}/>
          </span>
        </label>
      </Method>
      <Method>
        <input
          type="checkbox"
          id="upi"
          checked={selectedMethod === "upi"}
          onChange={() => handleSelection("upi")}
          style={{ display: "none" }}
        />
        <label htmlFor="upi">
          UPI
          <span
            className={`icon ${
              selectedMethod === "upi" ? "selectedIcon" : "defaultIcon"
            }`}
          >
            <Image src="/assets/Components/tick.png"  width={25} height={25}/>
          </span>
        </label>
      </Method>
      <Method>
        <input
          type="checkbox"
          id="emi"
          checked={selectedMethod === "emi"}
          onChange={() => handleSelection("emi")}
          style={{ display: "none" }}
        />
        <label htmlFor="emi">
          EMI
          <span
            className={`icon ${
              selectedMethod === "emi" ? "selectedIcon" : "defaultIcon"
            }`}
          >
            <Image src="/assets/Components/tick.png"  width={25} height={25}/>
          </span>
        </label>
      </Method>
      <Method>
        <input
          type="checkbox"
          id="cashOnDelivery"
          checked={selectedMethod === "cashOnDelivery"}
          onChange={() => handleSelection("cashOnDelivery")}
          style={{ display: "none" }}
        />
        <label htmlFor="cashOnDelivery">

           Cash on Delivery
              <span
                className={`icon ${
                  selectedMethod === "cashOnDelivery"
                    ? "selectedIcon"
                    : "defaultIcon"
                }`}
              >
                <Image src="/assets/Components/tick.png"  width={25} height={25}/>
              </span>
        </label>
      </Method>
    </MethodsContainer>
  );
};

export default PaymentOptions;

const MethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Method = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  label {
    align-items: center;
    font-size: 14px;
    font-family: "merienda";
    font-weight: 600;
    color: #ffdef4;
  }
  .icon {
    cursor: pointer;
    margin-left: 5px;
  }
  .selectedIcon {
    filter: invert(100%);
  }
`;

