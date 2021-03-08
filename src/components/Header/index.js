import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { Container } from "./styles";

import Logo from "../../assets/controller.png";

const Header = () => (
  <Container>
    <header>
      <Link to="/">
        <img src={Logo} className="logo" alt="AGameShop" />
      </Link>
      <h1 className="pageTitle">AGameShop</h1>
      <nav className="cartNav">
        <Link to="/cart">
          <FiShoppingCart size={35} className="cartIcon" />
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
