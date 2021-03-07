import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import ProductsProvider from "./hooks";

import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <Router>
        <ProductsProvider>
          <Routes />
        </ProductsProvider>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
