'use client'
import Image from 'next/image'
import React, { useState } from "react";
import styled from "styled-components";

function AddOn(props) {
  const [newItem, setNewItem] = useState(""); 
  const [items, setItems] = useState([]); 

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]); 
      setNewItem("");
    }
    console.log(items);
  };

  const handleRemoveItem = (indexToRemove) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };

  return (
    <MainContainer>
      <OutsideBoxText>{props.OutsideBoxText}</OutsideBoxText>
      <Content>
        <InputContainer>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add Coupon"
          />
        </InputContainer>
        <AddIcon onClick={handleAddItem}>
          <Image src="/assets/Components/Add_ring.png" width={500} height={500} />
        </AddIcon>
        <Items>
          {items.map((item, index) => (
            <ItemContainer key={index}>
              <RemoveIcon onClick={() => handleRemoveItem(index)}>
                <Image src="/assets/Components/cross.png" width={500} height={500} />
              </RemoveIcon>
              <div>{item}</div>
            </ItemContainer>
          ))}
        </Items>
      </Content>
    </MainContainer>
  );
}

export default AddOn;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  flex: 1;
  background-color: #ffdef4;
  padding: 5px 25px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 25%;
  > input {
    background-color: transparent;
    border: 0;
    outline: none; /* Remove the border on click */
    &::placeholder{
      font-size:14px;
      color: #ff0065;
      font-weight:400;
      font-family: "merienda";
    }
  }

`;

const AddIcon = styled.div`
  cursor: pointer;
  margin-left: 5px;
`;
const OutsideBoxText = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  font-family: "merienda";
  font-weight: 600;
  color: #ffdef4;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 25px;
  > div {
    background-color: #ffdef4;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 5px 15px;
    margin-right: 10px;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding:0px 2px;
`;

const RemoveIcon = styled.div`
  cursor: pointer;
  margin-right:5px;
  width:20px;
  color: red; /* Change color or add icon styling */
`;
