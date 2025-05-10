import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "../styles/header.css";

function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartCount = cart.length;

  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  const handleNav = (path) => {
    if (path === "/about" || isLoggedIn || path === "/login" || path === "/register") {
      navigate(path);
    } else {
      alert("Please login first.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="header">
      <h1 className="header-title" onClick={() => handleNav("/")}>
        AJV'S E-COMMERCE
      </h1>
      <nav>
        <ul className="nav-links">
          <li onClick={() => handleNav("/about")}>About</li>

          {!isLoggedIn ? (
            <>
              <li onClick={() => handleNav("/login")}>Login</li>
            </>
          ) : (
            <>
              <li onClick={() => handleNav("/home")}>Products</li>
              <li onClick={() => handleNav("/cart")} className="cart-button">
                <FiShoppingCart size={24} />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </li>
              <li onClick={handleLogout}>Logout</li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
