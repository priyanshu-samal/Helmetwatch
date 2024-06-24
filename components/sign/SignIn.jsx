import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = ({ onSwitchToSignUp, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('All fields are required');
    } else {
      onLogin();
      navigate('/');
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-800">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-100 text-gray-800"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-100 text-gray-800"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Sign In</button>
      </form>
      <p className="mt-4 text-black">
        Don't have an account? <Link to="#" onClick={onSwitchToSignUp} className="text-blue-400">Sign Up</Link>
      </p>
    </>
  );
};

export default SignIn;