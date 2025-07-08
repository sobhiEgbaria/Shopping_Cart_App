import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const handelAddProduct = (newProduct) => {
    const existingProduct = cartProducts.find(
      (product) => product.id === newProduct.id
    );

    if (existingProduct) {
      const updatedCart = cartProducts.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      return setCartProducts(updatedCart);
    }

    return setCartProducts([...cartProducts, newProduct]);
  };

  return (
    <div className="flex flex-col gap-4 text-white p-6">
      <Header />
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <ProductsList handelAddProduct={handelAddProduct} />
        <ShoppingCart cartProducts={cartProducts} />
      </div>
    </div>
  );
}

export default App;
