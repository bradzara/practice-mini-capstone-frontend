import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

function Content() {
  return (
    <main>
      <ProductsNew /> 
      <ProductsIndex />
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;