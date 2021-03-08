import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0px auto;
  padding: 40px 20px;
  margin-top: 80px;
  span {
    display: flex;
    justify-content: space-between;
  }
`;
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${appearFromLeft} 1s;
`;
export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: #f0f0f0;
  margin-bottom: 30px;
  margin-left: 20px;
`;

export const Select = styled.div`
  margin-right: 1%;
  select {
    font-family: "Play", sans-serif;
    text-align: center;
    padding: 10px;
    justify-content: space-between;
    color: #202020;
    background-color: #f0f0f0;
    border-radius: 5px;
    border-style: none;
    transition: 0.2s;
    margin: 10px;
    &:hover {
      background-color: #e1e1e1;
    }
    & + option {
      font-family: "Play";
    }
  }
`;

export const ProductsContainer = styled.li`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  background-color: #fff;
  border-radius: 5px;
  border: 2px blue;
  margin-top: 20px;
  margin-left: 12px;
  max-width: 250px;

  img {
    border-radius: 5px;
    width: 90%;
    padding: 30px;
    margin-left: 10px;
  }

  h5 {
    font-size: 14px;
    margin: 16px;
    color: #202020;
  }
  p {
    font-size: 15px;
    color: #202020;
    margin-left: 20px;
  }
  h4 {
    margin-top: 14px;
    margin-bottom: 14px;
    margin-left: 20px;
    font-size: 28px;
    color: #202020;
  }
  button {
    text-align: center;
    padding: 10px;
    justify-content: space-between;
    color: #e1e1e1;
    background-color: #8d1ba5;
    border-radius: 5px;
    border: none;
    transition: 0.2s;
    margin: 10px;
    img {
      display: inline-block;
      vertical-align: middle;
      color: #f0f0f0;
      width: 15%;
      margin-left: 20px;
      padding: 5px;
    }

    &:hover {
      background-color: #b930d6;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    position: relative;
    text-align: left;
    max-width: 140px;
    margin-bottom: 10px;
    min-height: 290px;
    align-content: space-around;
    justify-content: space-between;
    img {
      width: 80%;
      padding: 0px;
      margin: 12px;
      margin-top: 20px;
    }
    h5 {
      font-size: 3vw;
      color: #202020;
    }
    p {
      font-size: 2.5vw;
      color: #202020;
      margin-left: 20px;
    }

    .priceAndAddToCart {
      display: flex;
      text-align: left;
      h4 {
        margin-left: 15px;
        font-size: 3.5vw;
        margin-top: 25px;
      }
      button {
        display: block;
        text-align: center;
        width: 30px;
        height: 30px;
        font-size: 0;
        color: #e1e1e1;
        border: none;
        transition: 0.2s;
        padding-bottom: 30px;
        padding-right: 33px;
        margin-right: 20px;

        img {
          color: #f0f0f0;
          width: 6vw;
          padding: 0px;
          margin: 0px;
        }
      }
    }
  }
`;
