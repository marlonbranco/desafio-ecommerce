import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";

import addToCart from "../../assets/cart-icon.svg";
import formatValue from "../../utils/formatValue";
import Header from "../../components/Header";
import { Container, ProductsContainer, Select } from "./styles";

import Data from "../../products.json";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <select>
          <option value="title">Alfabética A-Z</option>
          <option value="score">Popularidade</option>
        </select>
        <ul className="products">
          {Data.map((product) => {
            return (
              <ProductsContainer key={product.id} className="product">
                <img src={`/assets/${product.image}`} alt={product.name} />
                <h4>{product.name}</h4>
                <p>
                  <FiThumbsUp size={17} />
                  {` ${product.score}`}
                </p>
                <span>
                  <p>
                    <strong>{formatValue(product.price)}</strong>
                  </p>
                  <button type="button">
                    <img src={addToCart} alt="Adicionar ao carrinho" />
                  </button>
                </span>
              </ProductsContainer>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
