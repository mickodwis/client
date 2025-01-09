import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", { username, password });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", { username, password });
      setToken(response.data.token);
      alert("Login successful!");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>MERN Authentication</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
      </div>
      {token && <p>Your Token: {token}</p>}
    </div>
  );
};

export default App;
