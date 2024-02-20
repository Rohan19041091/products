import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  useEffect(() => {
    let logoutTimer;
    // Set timeout for automatic logout after 30 minutes (adjust time as needed)
    const TIMEOUT_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

    if (login) {
      // Start the logout timer
      logoutTimer = setTimeout(() => {
        // Perform logout action
        logout();
        console.log('User logged out due to inactivity');
      }, TIMEOUT_DURATION);
    }

    return () => {
      // Clear the logout timer when the component unmounts or login status changes
      clearTimeout(logoutTimer);
    };
  }, [login]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to the API with the entered credentials
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // If the response is successful, set the login state to true
        const data = await response.json();
        console.log(data);
        setUsername('');
        setPassword('');
        localStorage.setItem('token', data.token);
        setLogin(true);
      } else {
        // If the response is not successful, handle the login error
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login Error:', error);
      // Handle login error
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setLogin(false);
  };

  if (login) {
    return (
      <div className="flex items-center">
        <Navigate to="/Home" />
        <button onClick={logout} className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center bg-gray-200 p-6 rounded-md'>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
    </form>
  );
};

export default LoginForm;
