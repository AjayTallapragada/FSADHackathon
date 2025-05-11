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
import PaymentOptions from './pages/PaymentOptions';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <CartProvider>
      <Routes>
        {/* Splash screen */}
        <Route path="/" element={<SplashScreen />} />

        {/* Auth pages */}
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
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <><Header /><PaymentOptions /></>
            </PrivateRoute>
          }
        />
        <Route
          path="/order-success"
          element={
            <PrivateRoute>
              <><Header /><OrderSuccess /></>
            </PrivateRoute>
          }
        />

        {/* Public page */}
        <Route path="/about" element={<><Header /><About /></>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
