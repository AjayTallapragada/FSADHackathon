import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import About from './pages/About';
import RegisterPage from './pages/RegisterPage'; // Import the Register Page
import PrivateRoute from './components/PrivateRoute';  // Import the PrivateRoute component

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";  // Check login status

  return (
    <CartProvider>
      <Header />
      <Routes>
        {/* Redirect to login page if the user visits the root */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} /> {/* Register Route */}

        {/* Protected Routes - Only accessible after login */}
        <Route 
          path="/home" 
          element={
            isLoggedIn ? <Home /> : <Navigate to="/login" />
          }
        />
        <Route 
          path="/cart" 
          element={
            isLoggedIn ? <Cart /> : <Navigate to="/login" />
          }
        />

        {/* About page is public */}
        <Route path="/about" element={<About />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
