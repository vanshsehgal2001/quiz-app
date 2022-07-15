import React from 'react';

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import {mobile} from '../responsive';
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding:"10px"})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};

  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
    ${mobile({ display:"none"})};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:"column"})};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:"column"})}
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin:"5px 15px"})}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom:"20px"})}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summery = styled.div`
  flex: 1;

  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummeryTitle = styled.h1`
  font-weight: 200;
`;

const SummeryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;

    font-weight:${(props) => props.type === "total" && 500};

    font-size:${(props) => props.type === "total" && '24px'};
`;

const SummeryItemText = styled.span``;

const SummeryItemPrice = styled.span``;

const Button = styled.button`
    width:100%;
    padding :10px;
    background-color:black;
    color:white;
    font-weight:600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>SHOPPING BAG</TopText>
            <TopText>YOUR WISHLIST</TopText>
          </TopTexts>
          <TopButton type="filled">CHECK OUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />

                <Details>
                  <ProductName>
                    <b>Product:</b> DENIM THUNDER SHOES
                  </ProductName>

                  <ProductId>
                    <b>ID:</b> 8949081906
                  </ProductId>

                  <ProductColor color="black" />

                  <ProductSize>
                    <b>SIZE:</b> 40
                  </ProductSize>
                </Details>
              </ProductDetails>

              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>

                <ProductPrice>Rs 500</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />

                <Details>
                  <ProductName>
                    <b>Product:</b> ZARA T-SHIRT
                  </ProductName>

                  <ProductId>
                    <b>ID:</b> 8949081907
                  </ProductId>

                  <ProductColor color="gray" />

                  <ProductSize>
                    <b>SIZE:</b> M
                  </ProductSize>
                </Details>
              </ProductDetails>

              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>

                <ProductPrice>Rs 500</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>

          <Summery>
            <SummeryTitle>ORDER SUMMARY</SummeryTitle>

            <SummeryItem>
              <SummeryItemText>Subtotal</SummeryItemText>

              <SummeryItemPrice>Rs 700</SummeryItemPrice>
            </SummeryItem>

            <SummeryItem>
              <SummeryItemText>Estimated Shipping</SummeryItemText>

              <SummeryItemPrice>Rs 40</SummeryItemPrice>
            </SummeryItem>

            <SummeryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>

              <SummeryItemPrice>Rs -20</SummeryItemPrice>
            </SummeryItem>

            <SummeryItem type="total">
              <SummeryItemText>Total</SummeryItemText>

              <SummeryItemPrice>Rs 720</SummeryItemPrice>
            </SummeryItem>

            <Button>CHECK OUT NOW</Button>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
