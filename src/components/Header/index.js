import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { Container } from "./styles";

import Logo from "../../assets/controller.png";

const Header = () => (
  <Container>
    <header>
      <Link to="/">
        <img src={Logo} alt="AGameShop" />
      </Link>
      <h1>AGameShop</h1>
      <nav>
        <Link to="/">
          <FiShoppingCart size={35} />
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
