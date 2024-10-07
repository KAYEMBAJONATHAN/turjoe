'use client';
import React, { useState } from 'react';

export default function Calculator() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<{ name: string; age: number } | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age) {
      setError('Please enter both name and age.');
      return;
    }

    setLoading(true);
    setError(null);

    setTimeout(() => {
      setUserData({ name, age });
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setUserData(null);
    setSubmitted(false);
    setName('');
    setAge(undefined);
  };

  const calculateBirthYear = (age: number): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      {loading ? (
        <p>Loading...</p>
      ) : submitted && userData ? (
        <>
          <h2>Hello, {userData.name}! You are {userData.age} years old.</h2>
          <h3>You were born in {calculateBirthYear(userData.age)}.</h3>
          <button onClick={handleReset} style={{ padding: '10px', margin: '10px' }}>
            Reset
          </button>
        </>
      ) : (
        <form onSubmit={handleFormSubmit} className="ui-space-y-4 ui-bg-white ui-p-8 ui-rounded ui-shadow-md ui-w-full ui-max-w-md">
          {error && <p className="ui-text-red-500">{error}</p>}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-indigo-400"
          />
          <input
            type="number"
            value={age || ''}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Enter your age"
            className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-indigo-400"
          />
          <button
            type="submit"
            className="ui-w-full ui-bg-indigo-500 ui-text-white ui-font-bold ui-py-2 ui-px-4 ui-rounded hover:ui-bg-indigo-600 focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-indigo-400"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
