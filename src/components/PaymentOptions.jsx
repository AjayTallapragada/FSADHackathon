import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/payment.css"; // Import the CSS for styling

function PaymentOptions() {
  const [method, setMethod] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method.");
      return;
    }

    // Simulate saving order
    console.log("Payment Method Selected:", method);

    navigate('/order-success'); // redirect to success page
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <label className="payment-option">
          <input type="radio" value="cod" checked={method === "cod"} onChange={() => setMethod("cod")} />
          Cash on Delivery
        </label>
        <label className="payment-option">
          <input type="radio" value="upi" checked={method === "upi"} onChange={() => setMethod("upi")} />
          UPI
        </label>
        <label className="payment-option">
          <input type="radio" value="card" checked={method === "card"} onChange={() => setMethod("card")} />
          Credit/Debit Card
        </label>
      </div>
      <button className="proceed-btn" onClick={handlePayment}>Proceed</button>
    </div>
  );
}

export default PaymentOptions;
