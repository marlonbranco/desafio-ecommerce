import React, { useState, useEffect, useContext, useCallback } from "react";
import { Route } from "react-router-dom";

import addToCart from "../../assets/cart-icon.svg";
import Header from "../../components/Header";
import { Container, Title, ProductsContainer, Select } from "./styles";

import Products from "../../components/Products/Products";
import Data from "../../products.json";
import { CartContext } from "../../hooks/cart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("name");
  const [items, setItems] = useContext(CartContext);

  useEffect(() => {
    const sortProducts = (type) => {
      const types = {
        name: "name",
        score: "score",
        price: "price",
      };
      const sortProperty = types[type];
      const sorted = [...Data].sort((a, b) => {
        if (sortProperty === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortProperty === "price") {
          return a[sortProperty] - b[sortProperty];
        } else {
          return b[sortProperty] - a[sortProperty];
        }
      });
      setData(sorted);
    };

    sortProducts(sortType);
  }, [sortType]);

  const handleAddToCart = useCallback(
    (item) => {
      const itemExists = items.find((i) => i.id === item.id);
      if (itemExists) {
        setItems(
          items.map((i) =>
            i.id === item.id ? { ...item, quantity: i.quantity + 1 } : i
          )
        );
      } else {
        setItems([...items, { ...item, quantity: 1 }]);
      }
    },
    [items, setItems]
  );

  return (
    <>
      <Header />
      <Container>
        <span>
          <Title>Jogos</Title>
          <Select className="custom-select">
            <select onChange={(e) => setSortType(e.target.value)}>
              <option value="">Filtrar por...</option>
              <option value="price">Preço</option>
              <option value="score">Popularidade</option>
              <option value="name">Nome</option>
            </select>
          </Select>
        </span>
        <ul className="products">
          {data.map((product) => (
            <ProductsContainer key={product.id} className="product">
              <Products product={product} />
              <Route
                render={({ history }) => (
                  <button
                    type="button"
                    onClick={() => {
                      history.push("/cart");
                      console.log(items);
                      return handleAddToCart(product);
                    }}
                  >
                    Adicionar ao carrinho
                    <img src={addToCart} alt="Adicionar ao carrinho" />
                  </button>
                )}
              ></Route>
            </ProductsContainer>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
