import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import About from './pages/About';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import SplashScreen from "./pages/SplashScreen";

function App() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <CartProvider>
      <Routes>
        {/* Splash screen on first load */}
        <Route path="/" element={<SplashScreen />} />

        {/* Login & Register */}
        <Route path="/login" element={<><Header /><Login /></>} />
        <Route path="/register" element={<><Header /><RegisterPage /></>} />

        {/* Protected routes */}
        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <><Header /><Home /></>
            </PrivateRoute>
          }
        />
        <Route 
          path="/cart" 
          element={
            <PrivateRoute>
              <><Header /><Cart /></>
            </PrivateRoute>
          }
        />

        {/* Public About page */}
        <Route path="/about" element={<><Header /><About /></>} />

        {/* Catch-all: redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
