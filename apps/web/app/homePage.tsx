'use client';
import React from 'react';
import welcome from '../public/welcome.jpg'

export default function HomePage() {
  return (
    <div className="ui-flex ui-items-center ui-justify-center ui-min-h-screen ui-bg-gray-50 ui-text-black ui-font-cursive ui-flex-col">
      <img src="/welcome.jpg" alt="welcome" className="ui-w-80 ui-h-auto ui-mb-8" />
      <h1 className="ui-text-4xl font-bold">Welcome to My App</h1>
    </div>
  );
}
