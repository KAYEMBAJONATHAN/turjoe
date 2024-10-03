'use client'
import React, { useState } from 'react';

interface UserFormProps {
  onSubmit: (name: string, age: number) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age) {
      setError('Please enter both name and age.');
    } else {
      setError(null);
      onSubmit(name, age);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red'}}>{error}</p>}
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
      <button type="submit" style={{ padding: '10px', margin: '10px', border: 'solid 1px', color: '#880000' }}>
        Submit
      </button>
    </form>
  );
}
