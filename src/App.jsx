import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const handelAddProduct = (product) => {
    setCartProducts([...cartProducts, product]);
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
