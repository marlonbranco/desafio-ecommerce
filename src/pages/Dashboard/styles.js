import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0px auto;
  padding: 40px 20px;

  span {
    display: flex;
    justify-content: space-between;
  }
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
  display: inline-table;
  background-color: #fff;
  border-radius: 5px;
  border: 2px blue;
  margin-top: 20px;
  margin-left: 12px;
  margin-bottom: 30px;
  height: 350px;
  max-width: 250px;

  &:hover {
    border: 5px;
  }
  img {
    border-radius: 5px;
    width: 90%;
    padding: 30px;
    margin-left: 10px;
  }

  h4 {
    font-size: 14px;
    margin: 16px;
    color: #202020;
  }
  p {
    font-size: 15px;
    color: #202020;
    margin-left: 20px;
  }
  p {
    margin-top: 14px;
    margin-bottom: 14px;
    strong {
      font-size: 28px;
      color: #202020;
    }
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
`;
