import React, { useContext } from "react";
import { FiPlusSquare, FiMinusSquare, FiTrash } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import Header from "../../components/Header";
import formatValue from "../../utils/formatValue";
import {
  CartContainer,
  Title,
  ProductsContainer,
  CheckoutContainer,
  CheckoutButton,
  AnimationContainer,
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

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      return;
    } else {
      setItems(
        items.map((i) =>
          i.id === item.id ? { ...item, quantity: i.quantity - 1 } : i
        )
      );
    }
  };
  const handleRemoveItem = (id) => setItems(items.filter((i) => i.id !== id));

  const totalItensInCart = items.reduce((accumulator, item) => {
    const itemsQuantity = item.quantity;

    return accumulator + itemsQuantity;
  }, 0);

  const cartSubTotal = items.reduce((accumulator, item) => {
    const itemsSubTotal = item.price * item.quantity;

    return (accumulator += itemsSubTotal);
  }, 0);
  const shippingCost = items.reduce((accumulator, item) => {
    if (cartSubTotal > 250) {
      return 0;
    } else {
      const shipping = item.quantity * 10;
      return (accumulator += shipping);
    }
  }, 0);

  const finalPrice = cartSubTotal + shippingCost;

  let history = useHistory();

  const orderButton = () => {
    setItems([]);
    history.push("/");
    alert("Pedido realizado com sucesso!");
  };

  return (
    <>
      <Header />
      <CartContainer>
        <AnimationContainer>
          <Title>Meu carrinho</Title>
          <ul className="items">
            {items.map((item) => (
              <ProductsContainer key={item.id} name="item">
                <span>
                  <img src={`/assets/${item.image}`} alt={item.name} />
                  <h3>{item.name}</h3>
                </span>
                <div>
                  <h2>{formatValue(item.quantity * item.price)}</h2>
                  <h4>
                    {`${item.quantity}x `}
                    {formatValue(item.price)}
                  </h4>
                  <span className="itemActions">
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
                <h4>Quantidade:{` ${totalItensInCart}`}</h4>
                <span className="checkoutValues">
                  <h3>Subtotal</h3>
                  <h4>{formatValue(cartSubTotal)}</h4>
                </span>
                <span className="checkoutValues">
                  <h3>Frete</h3>
                  {cartSubTotal === 0 ? (
                    <h4>R$ 0,00</h4>
                  ) : (
                    <h4 className="freeShipping">
                      {shippingCost === 0
                        ? "Grátis"
                        : formatValue(shippingCost)}
                    </h4>
                  )}
                </span>
              </span>
              <hr className="line" />
              <span className="checkoutValues">
                <h2>Total</h2>
                <h2 data-testid="final-price">{formatValue(finalPrice)}</h2>
              </span>
            </CheckoutContainer>
            <CheckoutButton onClick={orderButton}>
              Finalizar compra
            </CheckoutButton>
          </ul>
          <div className="goToDashboard">
            <Link to="/">Adicionar mais jogos</Link>
          </div>
        </AnimationContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
