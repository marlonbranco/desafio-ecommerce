import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";

import addToCart from "../../assets/cart-icon.svg";
import formatValue from "../../utils/formatValue";
import Header from "../../components/Header";
import { Container, ProductsContainer } from "./styles";

import Data from "../../products.json";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    const sortProducts = (type) => {
      const types = {
        name: "name",
        score: "score",
      };
      const sortProperty = types[type];
      const sorted = [...Data].sort((a, b) => {
        if (sortProperty === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return b[sortProperty] - a[sortProperty];
        }
      });
      console.log(sorted);
      setData(sorted);
    };

    sortProducts(sortType);
  }, [sortType]);

  return (
    <>
      <Header />
      <Container>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="">Filtrar por ...</option>
          <option value="name">Nome</option>
          <option value="score">Popularidade</option>
        </select>
        <ul className="products">
          {data.map((product) => (
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
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
