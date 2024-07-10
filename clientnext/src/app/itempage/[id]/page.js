'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Layout1 from "../../layouts/Layout1";
import styled from "styled-components";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";

const ItemPage = () => {
  const [item, setItem] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams(); // Assuming you are using Next.js for client-side routing

  useEffect(() => {
    if (id) {
      const fetchItem = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/tagcard/idItem?id=${id}`
          );
          setItem(response.data.attributes);
          setMainImage(
            `http://localhost:1337${response.data.attributes.Images.data[0].attributes.url}`
          );
          const userId = localStorage.getItem("id");
          fetchReviews(userId, response.data.attributes.ItemId); // Fetch reviews based on ItemId
        } catch (error) {
          console.error("Error fetching item details:", error);
        }
      };

      fetchItem();
    }
  }, [id]);

  const fetchReviews = async (userId, itemId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/reviews/product?userid=${userId}&itemid=${itemId}`
      );
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  const handleImageClick = (url) => {
    setMainImage(`http://localhost:1337${url}`);
  };

  const handleAddToCart = async () => {
    const userId = localStorage.getItem("id");
    const itemId = id; // assuming item.ItemId is available in your component
  
    try {
      const response = await axios.post('http://localhost:3000/userDeets/addToCart', {
        userid: userId,
        itemid: itemId
      });
  
      console.log(response.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleDirectBuy = () => {
    // Implement direct buy functionality if needed
  };

  return (
    <Layout1>
      <MainContainer>
        <LeftHalf>
          <LeftImageContainer>
            {item.Images.data.map((image, index) => (
              <Thumbnail
                key={image.id}
                src={`http://localhost:1337${image.attributes.url}`}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageClick(image.attributes.url)}
              />
            ))}
          </LeftImageContainer>
          <ImageContentContainer>
            <MainImage src={mainImage} alt="Main item image" />
            <ButtonContainer>
              <BuyButton onClick={handleDirectBuy}>
                <FaShoppingBag size={20} style={{ marginRight: "10px" }} />
                Buy
              </BuyButton>
              <CartButton onClick={handleAddToCart}>
                <FaShoppingCart size={20} style={{ marginRight: "10px" }} />
                Add to Cart
              </CartButton>
            </ButtonContainer>
          </ImageContentContainer>
        </LeftHalf>
        <RightHalf>
          <h2>{item.Name}</h2>
          {item.SP < item.CP ? (
            <PriceContainer>
              <span>SP</span>
              <StrikedPrice>{item.CP}</StrikedPrice>
              <OfferPercentage>
                ({Math.round(((item.CP - item.SP) / item.CP) * 100)}% Off)
              </OfferPercentage>
            </PriceContainer>
          ) : (
            <PriceContainer>
              <span>Price</span>
              <span>{item.CP}</span>
            </PriceContainer>
          )}
          <p>
            <strong>Colors Available:</strong> {item.Features.Colors.join(", ")}
          </p>
          <p>
            <strong>Sizes Available:</strong>{" "}
            {item.Features.SizesAvailable.join(", ")}
          </p>
          <p>
            <strong>Size:</strong> {item.Features.Size}
          </p>
          <p>
            <strong>Brand:</strong> {item.Features.Brand}
          </p>
          <p>
            <strong>ASIN:</strong> {item.Features.ASIN}
          </p>
          <p>
            <strong>Best Sellers Rank:</strong> {item.Features.BestSellersRank}
          </p>
          <p>
            <strong>Handle Material:</strong> {item.Features.HandleMaterial}
          </p>
          <p>
            <strong>Item Part Number:</strong> {item.Features.ItemPartNumber}
          </p>
          <p>
            <strong>Item Weight:</strong> {item.Features.ItemWeight}
          </p>
          <p>
            <strong>Manufacturer:</strong> {item.Features.Manufacturer}
          </p>
          <p>
            <strong>Material:</strong> {item.Features.Material}
          </p>
          <p>
            <strong>Skill Level:</strong> {item.Features.SkillLevel}
          </p>
          <p>
            <strong>Sport:</strong> {item.Features.Sport}
          </p>
          <h3>Description:</h3>
          {Object.values(item.Description).map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
          <h3>Reviews:</h3>
          {reviews.map((review) => (
            <ReviewContainer key={review.id}>
              <p>
                <strong>Rating:</strong> {review.attributes.Rating}
              </p>
              <p>
                <strong>Review:</strong> {review.attributes.Review}
              </p>
              <p>
                <strong>Date:</strong> {review.attributes.Date}
              </p>
              <ReviewImagesContainer>
                {review.attributes.ImagesVideo.data.map((media, index) => (
                  <ReviewImage
                    key={index}
                    src={`http://localhost:1337${media.attributes.url}`}
                    alt={`Review Media ${index + 1}`}
                  />
                ))}
              </ReviewImagesContainer>
            </ReviewContainer>
          ))}
        </RightHalf>
      </MainContainer>
    </Layout1>
  );
};

export default ItemPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  margin-top: 50px;
`;

const LeftHalf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: #ffedf4;
  padding-top: 25px;
  margin-right: 50px;
`;

const RightHalf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LeftImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  max-width: 150px;
  flex: 1;
  padding: 0px 20px;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-top: 25px;
  background-size: contain;
  cursor: pointer;
`;

const MainImage = styled.img`
  flex: 10;
  max-width: 450px;
  max-height: 450px;
  margin-top: 20px;
  justify-content: center;
`;

const ReviewContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
`;

const ReviewImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ReviewImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const BuyButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff0065;
  color: white;
  padding: 10px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-right: 25px;
  cursor: pointer;
`;

const CartButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #ff0065;
  border: #ff0065 1px solid;
  padding: 10px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-left: 25px;
  cursor: pointer;
`;

const ImageContentContainer = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StrikedPrice = styled.span`
  margin-left: 10px;
  text-decoration: line-through;
  color: #888;
`;

const OfferPercentage = styled.span`
  margin-left: 5px;
  color: #FF0065;
`;
