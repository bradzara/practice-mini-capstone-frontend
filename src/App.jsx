function Header() {}

function ProductsNew() {}

function ProductsIndex() {}

function Footer() {}

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