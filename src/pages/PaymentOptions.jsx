import { useNavigate } from "react-router-dom";
import "../styles/payment.css"; // Make sure to import the styling

function PaymentOptions() {
  const navigate = useNavigate();

  const handlePayment = (method) => {
    alert(`Payment method selected: ${method}`);
    navigate("/order-success");
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Select Payment Method</h2>
      <div className="payment-buttons">
        <button onClick={() => handlePayment("UPI")} className="payment-btn">Pay with UPI</button>
        <button onClick={() => handlePayment("Card")} className="payment-btn">Pay with Card</button>
        <button onClick={() => handlePayment("COD")} className="payment-btn">Cash on Delivery</button>
      </div>
    </div>
  );
}

export default PaymentOptions;
