import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "../styles/header.css";

function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartCount = cart.length;

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Handle navigation
  const handleNav = (path) => {
    if (path === "/about" || isLoggedIn || path === "/login" || path === "/register") {
      navigate(path);
    } else {
      alert("Please login first.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");  // Set login state to false
    sessionStorage.removeItem("isLoggedIn");  // Clear sessionStorage to make it logout on close
    navigate("/login");
  };

  return (
    <header className="header">
      <h1 className="header-title" onClick={() => handleNav("/")}>
        AJV'S E-COMMERCE
      </h1>
      <nav>
        <ul className="nav-links">
          {/* About page is always accessible */}
          <li onClick={() => handleNav("/about")}>About</li>

          {/* If not logged in, show Login link */}
          {!isLoggedIn ? (
            <li onClick={() => handleNav("/login")}>Login</li>
          ) : (
            <>
              {/* If logged in, show Products, Cart, and Logout links */}
              <li onClick={() => handleNav("/home")}>Products</li>
              <li onClick={() => handleNav("/cart")} className="cart-button">
                <FiShoppingCart size={24} />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </li>
              <li onClick={handleLogout}>Logout</li> {/* Logout button */}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
