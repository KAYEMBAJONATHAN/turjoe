'use client';
import React from 'react';

export default function About() {
  return (
    <div className="ui-flex ui-items-center ui-justify-center ui-min-h-screen ui-bg-gray-100">
      <div className="ui-bg-white ui-p-8 ui-rounded ui-shadow-md ui-w-full ui-max-w-2xl">
        <h1 className="ui-text-2xl ui-font-bold ui-mb-4 ui-text-center">About Our App</h1>
        <p className="ui-text-gray-700 ui-mb-4">
          This app is designed to help users interact with various forms and calculators in a simple and intuitive way.
        </p>
        <p className="ui-text-gray-700">
          We aim to improve user experience and add more features over time.
        </p>
      </div>
    </div>
  );
}
