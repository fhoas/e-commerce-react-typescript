import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Footer from "./components/footer/Footer";
import { MainContextProvider } from "./context/MainContext";
import { ProductsContextProvider } from "./context/ProductsContext";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <MainContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="products/details/:id" element={<DetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </MainContextProvider>
  );
}

export default App;
