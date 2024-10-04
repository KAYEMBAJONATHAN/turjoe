'use client';
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
    <div className="ui-flex ui-items-center ui-justify-center ui-min-h-screen ui-bg-gray-100">
      <form onSubmit={handleSubmit} className="ui-space-y-4 ui-bg-white ui-p-8 ui-rounded ui-shadow-md ui-w-full ui-max-w-md">
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
    </div>
  );
}