import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0px auto;
  padding: 40px 20px;

  .goToDashboard {
    text-align: center;
    width: 100%;
    a {
      color: #fff;
      padding: 10px;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: #f0f0f0;
  margin-bottom: 30px;
`;
export const ProductsContainer = styled.li`
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  border: 2px blue;
  margin-bottom: 15px;
  max-width: 1140px;

  img {
    padding: 20px;
    width: 20%;
  }
  h3 {
    margin-top: 30px;
  }
  h4 {
    margin-left: 70px;
  }
  div {
    float: right;
    margin-left: 40%;
    padding: 20px;
    h2 {
      margin-top: 10px;
    }
    span {
      display: flex;
      padding-top: 20px;
      justify-content: space-between;

      h4 {
        margin: 0px 5px;
        font-size: 20px;
      }
      button {
        border-radius: 50%;
        border-style: none;
        background-color: #fff;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.7;
        }
      }

      .remove {
        margin-left: 30px;
      }
    }
  }
`;

export const CheckoutContainer = styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 2px blue;
  margin-bottom: 15px;
  max-width: 1140px;
  padding-left: 30px;

  .checkoutDetails {
    margin: 30px;
    h3,
    h4 {
      margin-top: 12px;
    }
  }
  .line {
    margin: 0px auto 10px;
    width: 94%;
  }
  .checkoutValues {
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    h2 {
      padding-bottom: 30px;
    }
  }
`;

export const CheckoutButton = styled.button`
  background-color: #40cd28;
  border-radius: 5px;
  border: 2px blue;
  margin-bottom: 15px;
  width: 100%;
  padding: 15px;
  max-width: 1140px;
  text-align: center;
  line-height: 1em;
  font-weight: bold;
  color: #f0f0f0;
  transition: 0.2s;

  &:hover {
    background-color: #40dd28;
  }
`;
