import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleSwitchToSignUp = () => {
    setIsSigningIn(false);
  };

  const handleSwitchToSignIn = () => {
    setIsSigningIn(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="w-full bg-red-500 text-white p-2 rounded mt-4">
            Sign Out
          </button>
        ) : (
          <>
            {isSigningIn ? (
              <SignIn onSwitchToSignUp={handleSwitchToSignUp} onLogin={handleLogin} />
            ) : (
              <SignUp onSwitchToSignIn={handleSwitchToSignIn} onLogin={handleLogin} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;