import React from "react";
import Layouts from "../layouts/Layouts";
import styled from "styled-components";
import SummaryItemCard from "../components/SummaryItemCard";

function TrackYourOrdersPage() {
  const data = [
    {
      OrderedDate: "12/05/22",
      OrderValue: "₹499",
      InvoiceId: "#7856342AB89",
      PaymentMethod: "Debit Card",
      Name: "Rahul Sharma",
      ShippingAddress: "23C Sunshine Colony Mumbai 400001",
      Product: "Nike Running Shoes",
      Status: "Dispatched",
      ExpectedDateOfDelivery: "18/05/22",
      Delivery: "onTime",
      imageUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL.jpg",
    },
    {
      OrderedDate: "07/04/23",
      OrderValue: "₹799",
      InvoiceId: "#9876123CD56",
      PaymentMethod: "Net Banking",
      Name: "Alisha Banerjee",
      ShippingAddress: "88D Green Avenue Kolkata 700001",
      Product: "Sony Wireless Headphones",
      Status: "Import Transit",
      ExpectedDateOfDelivery: "15/04/23",
      Delivery: "onTime",
      imageUrl:
        "https://5.imimg.com/data5/YT/VF/TM/ANDROID-102675631/product-jpeg.jpg",
    },
    {
      OrderedDate: "19/06/23",
      OrderValue: "₹1299",
      InvoiceId: "#5432890EF76",
      PaymentMethod: "UPI",
      Name: "Karthik Patel",
      ShippingAddress: "7A Blue Street Bangalore 560001",
      Product: "Samsung Smartwatch",
      Status: "Warehouse",
      ExpectedDateOfDelivery: "25/06/23",
      Delivery: "Delayed",
      imageUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL.jpg",
    },
    {
      OrderedDate: "03/03/23",
      OrderValue: "₹899",
      InvoiceId: "#2345678GH90",
      PaymentMethod: "Credit Card",
      Name: "Priya Singh",
      ShippingAddress: "45E Red Road Delhi 110001",
      Product: "KitchenAid Mixer",
      Status: "Delivered",
      ExpectedDateOfDelivery: "09/03/23",
      Delivery: "Delayed",
      imageUrl:
        "https://5.imimg.com/data5/YT/VF/TM/ANDROID-102675631/product-jpeg.jpg",
    },
    {
      OrderedDate: "28/07/23",
      OrderValue: "₹349",
      InvoiceId: "#8765432IJ12",
      PaymentMethod: "COD",
      Name: "Amit Kumar",
      ShippingAddress: "12F Yellow Lane Pune 411001",
      Product: "HP Wireless Mouse",
      Status: "Dispatched",
      ExpectedDateOfDelivery: "03/08/23",
      Delivery: "onTime",
      imageUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL.jpg",
    },
    {
      OrderedDate: "14/09/23",
      OrderValue: "₹199",
      InvoiceId: "#1234567KL34",
      PaymentMethod: "PayPal",
      Name: "Sneha Verma",
      ShippingAddress: "34G Violet Place Hyderabad 500001",
      Product: "Amazon Basics Backpack",
      Status: "Import Transit",
      ExpectedDateOfDelivery: "20/09/23",
      Delivery: "onTime",
      imageUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL.jpg",
    },
    {
      OrderedDate: "02/11/23",
      OrderValue: "₹599",
      InvoiceId: "#3456789MN56",
      PaymentMethod: "Debit Card",
      Name: "Rajesh Iyer",
      ShippingAddress: "56H Orange Street Chennai 600001",
      Product: "LG LED Monitor",
      Status: "Warehouse",
      ExpectedDateOfDelivery: "08/11/23",
      Delivery: "onTime",
      imageUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL.jpg",
    },
    {
      OrderedDate: "10/01/23",
      OrderValue: "₹999",
      InvoiceId: "#7890123OP78",
      PaymentMethod: "Credit Card",
      Name: "Neha Desai",
      ShippingAddress: "78I Brown Road Mumbai 400001",
      Product: "JBL Bluetooth Speaker",
      Status: "Delivered",
      ExpectedDateOfDelivery: "16/01/23",
      Delivery: "onTime",
      imageUrl:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL.jpg",
    },
  ];

  return (
    <Layouts>
      <MainContainer>
        <HeaderText>Track Your Orders</HeaderText>
        <ItemContainers>
          {data.map((item, index) => (
            <Item>
            <SummaryItemCard
              key={index} // Ensure to have a unique key for each rendered element
              OrderedDate={item.OrderedDate}
              OrderValue={item.OrderValue}
              InvoiceId={item.InvoiceId}
              PaymentMethod={item.PaymentMethod}
              Name={item.Name}
              ShippingAddress={item.ShippingAddress}
              Product={item.Product}
              Status={item.Status}
              ExpectedDateOfDelivery={item.ExpectedDateOfDelivery}
              Delivery={item.Delivery}
              imageUrl={item.imageUrl}
            />
            </Item>
            
          ))}
        </ItemContainers>
      </MainContainer>
    </Layouts>
  );
}

export default TrackYourOrdersPage;

const MainContainer = styled.div`
  padding: 50px;
`;
const HeaderText = styled.div`
  margin-bottom: 50px;
  font-size: 32px;
  font-family: "merienda";
  color: #ff0065;
  font-weight: 600;
`;
const ItemContainers = styled.div``;

const Item = styled.div`
  margin-bottom: 50px;
`;