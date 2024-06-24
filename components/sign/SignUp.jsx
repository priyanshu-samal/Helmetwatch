import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = ({ onSwitchToSignIn, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '' || confirmPassword === '') {
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      onLogin();
      navigate('/');
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
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
        <div className="mb-4">
          <label className="block text-gray-800">Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-100 text-gray-800"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Sign Up</button>
      </form>
      <p className="mt-4 text-black">
        Already have an account? <Link to="#" onClick={onSwitchToSignIn} className="text-blue-400">Sign In</Link>
      </p>
    </>
  );
};

export default SignUp;