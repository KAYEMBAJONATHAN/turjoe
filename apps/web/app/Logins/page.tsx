'use client';
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="ui-flex ui-items-center ui-justify-center ui-min-h-screen ui-bg-gray-100">
      <div className="ui-bg-white ui-p-8 ui-rounded ui-shadow-md ui-w-full ui-max-w-md">
        <h1 className="ui-text-2xl ui-font-bold ui-mb-6 ui-text-center">Login</h1>
        <form onSubmit={handleLogin} className="ui-space-y-6">
          <div>
            <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded ui-focus:outline-none ui-focus:ring-2 ui-focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded ui-focus:outline-none ui-focus:ring-2 ui-focus:ring-indigo-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="ui-w-full ui-bg-indigo-500 ui-text-white ui-font-bold ui-py-2 ui-px-4 ui-rounded ui-hover:bg-indigo-600 ui-focus:outline-none ui-focus:ring-2 ui-focus:ring-indigo-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
