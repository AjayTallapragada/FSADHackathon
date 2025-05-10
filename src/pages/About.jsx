import "../styles/about.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <span>AJV's E-Commerce Website</span>, your ultimate destination for top-quality gadgets and accessories. 
        We bring you the latest smartphones, laptops, gaming gear, and more at unbeatable prices.
      </p>
      <p>
        Our mission is simple: to provide high-quality products with a seamless shopping experience. 
        No unnecessary clutter—just great deals and fast shipping.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h2>🚀 Fast Delivery</h2>
          <p>We ship orders quickly, ensuring you get your products on time.</p>
        </div>
        <div className="about-card">
          <h2>💯 Quality Assurance</h2>
          <p>Every product is tested for quality and authenticity before shipping.</p>
        </div>
        <div className="about-card">
          <h2>💳 Secure Payments</h2>
          <p>All transactions are encrypted and secure with multiple payment options.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
