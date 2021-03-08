import styled, { keyframes } from "styled-components";

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
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${appearFromRight} 1s;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  color: #f0f0f0;
  margin-bottom: 30px;
`;
export const ProductsContainer = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
  border: 2px blue;
  margin-bottom: 15px;
  max-width: 1140px;
  min-width: 340px;
  span {
    display: flex;
    img {
      padding: 20px;
      width: 10%;
      min-width: 160px;
    }
    h3 {
      margin-top: 30px;
      font-size: 20px;
      padding-left: 50px;
    }
  }
  div {
    padding: 20px;
    margin-right: 20px;
    text-align: right;
    h4 {
      font-size: 17px;
      margin-top: 5px;
    }
    h2 {
      font-size: 25px;
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
  @media (max-width: 600px) {
    flex-direction: column;
    position: relative;
    .itemActions {
      display: flex;
      justify-content: space-evenly;
    }
    span {
      margin-bottom: 0px;
      padding-bottom: 0px;
      img {
        padding: 20px;
        width: 10%;
        min-width: 160px;
      }
      h3 {
        margin-top: 30px;
        font-size: 5vw;
        padding-left: 0px;
        padding-right: 20px;
      }
    }
    div {
      padding-bottom: 20px;
      margin-right: 20px;
      text-align: right;
      h4 {
        font-size: 3vw;
        margin-top: 5px;
      }
      h2 {
        font-size: 5.5vw;
        margin-top: 10px;
      }
      span {
        display: flex;
        padding-top: 20px;
        justify-content: space-between;

        h4 {
          font-size: 5vwpx;
        }
        button {
          border-radius: 20px;
          margin: 0px;
        }

        .remove {
          margin-left: 70px;
        }
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
  min-width: 340px;
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
