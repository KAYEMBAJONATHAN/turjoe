'use client';
import React, { useState } from 'react';
import UserForm from '../UserForms/page';

export default function Calculator() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<{ name: string; age: number } | null>(null);

  const handleFormSubmit = (name: string, age: number) => {
    setLoading(true);
    setTimeout(() => {
      setUserData({ name, age });
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setUserData(null);
    setSubmitted(false);
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
        <UserForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}
