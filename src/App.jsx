import Header from "./components/Header";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
function App() {
  return (
    <div class="flex flex-col gap-4 text-white p-6">
      <Header />
      <div class="flex flex-col md:flex-row justify-between gap-4">
        <Products />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
