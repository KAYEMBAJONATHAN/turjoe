'use client';
import { useState } from 'react';

export default function Calculator() {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age) {
      setError('Please enter both name and age.');
      return;
    }
    setError(null);
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setName('');
    setAge(undefined);
    setSubmitted(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <p style={{ color: 'gray' }}>This is the home page of my app.</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : submitted ? (
        <>
          <h2>Hello, {name}! You are {age} years old.</h2>
          <button onClick={handleReset} style={{ padding: '10px', margin: '10px', border: 'solid 1px black', color: 'green' }}>
            Reset
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ padding: '10px', margin: '10px' }}
          />
          <input
            type="number"
            value={age || ''}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Enter your age"
            style={{ padding: '10px', margin: '10px' }}
          />
          <button type="submit" style={{ padding: '10px', border: 'solid 1px black', color: 'red', background: 'white' }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
