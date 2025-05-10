import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-footer">
        <h3>Total: ₹{totalPrice}</h3>
        <div className="cart-buttons">
          <button onClick={() => navigate("/home")} className="continue-shopping">
            Continue Shopping
          </button>
          {cart.length > 0 && (
            <button onClick={clearCart} className="clear-cart">
              Clear Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
