import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CustomerContext } from '../Context/CustomerContext';

function LoginForm() {
  const navigate = useNavigate();
  const { CustomerName, setCustomerName, setCustomerId ,CustomerId } = useContext(CustomerContext);
  const [password, setPassword] = useState(localStorage.getItem("password") || "");
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login/', {
        CustomerName,
        password,
      });

      setMessage(response.data.message);
      setCustomerId(response.data.user_id);
      localStorage.setItem("password", password);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error || 'Login failed');
      } else {
        setMessage('Server error');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Customer Name"
          onChange={(e) => setCustomerName(e.target.value)} 
          value={CustomerName} 
        />
        <input 
          type="password" 
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
        <input type="submit" value="Login" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginForm;
