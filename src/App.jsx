import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/productList";
import Toggle from "./components/toggle/toggle";


function App() {
  return (
    <>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </>
  );
}

export default App;
