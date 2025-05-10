import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import About from './pages/About'

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        

      </Routes>
    </CartProvider>
  );
}

export default App;