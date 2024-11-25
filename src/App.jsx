import "./App.css";
import CoffeeSection from "./components/coffeeSection";
import DiscoverCoffee from "./components/discower-coffee";
import Header from "./components/header";
import Hero from "./components/hero";
import ProductSection from "./components/product";
import TypeCofee from "./components/type-coffee";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TypeCofee />
      <ProductSection />
      <DiscoverCoffee />
    </>
  );
}

export default App;
