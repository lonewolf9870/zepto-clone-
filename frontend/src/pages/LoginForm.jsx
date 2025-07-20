import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/login/', {
        mobile,
        password
      });
      setMessage(response.data.message);
      console.log('User ID:', response.data.user_id);
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
          placeholder="Mobile number"
          onChange={(e) => setMobile(e.target.value)} 
          value={mobile} 
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
