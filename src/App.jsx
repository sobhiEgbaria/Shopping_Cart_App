import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";
function App() {
  return (
    <div className="flex flex-col gap-4 text-white p-6">
      <Header />
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <ProductsList />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
