// import React, {
//   useState,
//   useEffect,
//   createContext,
//   useContext,
//   useCallback,
// } from "react";
// import AsyncStorage from "@react-native-community/async-storage";

// export const CartContext = createContext(null);

// const CartProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function loadProducts() {
//       const storagedProducts = await AsyncStorage.getItem(
//         "@AGameShop:products"
//       );
//       if (storagedProducts) {
//         setProducts([...JSON.parse(storagedProducts)]);
//       }
//     }
//     loadProducts();
//   });

//   const addToCart = useCallback(
//     async (product) => {
//       const productExists = products.find((p) => p.id === product.id);
//       if (productExists) {
//         setProducts(
//           products.map((p) =>
//             p.id === product.id ? { ...products, quantity: p.quantity + 1 } : p
//           )
//         );
//       } else {
//         setProducts([...products, { ...product, quantity: 1 }]);
//       }

//       await AsyncStorage.setItem(
//         "@AGameShop:products",
//         JSON.stringify(products)
//       );
//     },
//     [products]
//   );

//   const increment = useCallback(
//     async (id) => {
//       const incrementQuantity = products.map((product) =>
//         product.id === id
//           ? { ...products, quantity: product.quantity + 1 }
//           : product
//       );
//       setProducts(incrementQuantity);

//       await AsyncStorage.setItem(
//         "@AGameShop:products",
//         JSON.stringify(incrementQuantity)
//       );
//     },
//     [products]
//   );
//   const decrement = useCallback(
//     async (id) => {
//       const decrementQuantity = products.map((product) =>
//         product.id === id
//           ? { ...products, quantity: product.quantity - 1 }
//           : product
//       );
//       setProducts(decrementQuantity);

//       await AsyncStorage.setItem(
//         "@AGameShop:products",
//         JSON.stringify(decrementQuantity)
//       );
//     },
//     [products]
//   );

//   const value = React.useMemo(
//     () => ({ addToCart, increment, decrement, products }),
//     [products, addToCart, increment, decrement]
//   );
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// function useCart() {
//   const context = useContext(CartContext);

//   if (!context) {
//     throw new Error(`useCart must be used withn a CartProvider`);
//   }

//   return context;
// }
// export { CartProvider, useCart };
