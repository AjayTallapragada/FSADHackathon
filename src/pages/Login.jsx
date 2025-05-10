import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending request to backend...");
      const response = await fetch("http://localhost:8080/api/users");
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const users = await response.json();
      console.log("Users retrieved:", users);

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FiUser className="icon" />
            <input
              type="text"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FiLock className="icon" />
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="brutalist-button">ENTER</button>
        </form>
        <div className="register-link">
          Not a user?{" "}
          <span onClick={() => navigate("/register")}>Register here</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
