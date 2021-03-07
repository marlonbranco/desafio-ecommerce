import React, { useState, useContext, useEffect, useCallback } from "react";

import { FiPlusSquare, FiMinusSquare, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import formatValue from "../../utils/formatValue";
import {
  CartContainer,
  Title,
  ProductsContainer,
  CheckoutContainer,
  CheckoutButton,
} from "./styles";
import { CartContext } from "../../hooks/cart";

const Cart = () => {
  const [items, setItems] = useContext(CartContext);

  const handleIncrement = (item) =>
    setItems(
      items.map((i) =>
        i.id === item.id ? { ...item, quantity: i.quantity + 1 } : i
      )
    );

  const handleDecrement = (item) =>
    setItems(
      items.map((i) =>
        i.id === item.id ? { ...item, quantity: i.quantity - 1 } : i
      )
    );
  const handleRemoveItem = (id) => setItems(items.filter((i) => i.id !== id));

  return (
    <>
      <Header />
      <CartContainer>
        <Title>Meu carrinho</Title>
        <ul className="items">
          {items.map((item) => (
            <ProductsContainer key={item.id} name="item">
              <img src={`/assets/${item.image}`} alt={item.name} />
              <h3>{item.name}</h3>
              <div>
                <h2>{formatValue(item.quantity * item.price)}</h2>
                <h4>
                  {`${item.quantity}x `}
                  {formatValue(item.price)}
                </h4>
                <span>
                  <button type="button" onClick={() => handleDecrement(item)}>
                    <FiMinusSquare size={25} />
                  </button>
                  <h4>{item.quantity}</h4>
                  <button type="button" onClick={() => handleIncrement(item)}>
                    <FiPlusSquare size={25} />
                  </button>
                  <button
                    className="remove"
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FiTrash size={25} color={"red"} />
                  </button>
                </span>
              </div>
            </ProductsContainer>
          ))}
          <CheckoutContainer>
            <span className="checkoutDetails">
              <h2>Resumo do pedido</h2>
              <h4>Quantidade: 1</h4>
              <span className="checkoutValues">
                <h3>Subtotal</h3>
                <h4>R$ 149,90</h4>
              </span>
              <span className="checkoutValues">
                <h3>Frete</h3>
                <h4>R$ 10,00</h4>
              </span>
            </span>
            <hr className="line" />
            <span className="checkoutValues">
              <h2>Total</h2>
              <h2> R$ 159,90</h2>
            </span>
          </CheckoutContainer>
          <CheckoutButton onClick={() => console.log(items)}>
            Finalizar compra
          </CheckoutButton>
        </ul>
        <div className="goToDashboard">
          <Link to="/">Adicionar mais jogos</Link>
        </div>
      </CartContainer>
    </>
  );
};

export default Cart;
