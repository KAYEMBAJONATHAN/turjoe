'use client';
import React from 'react';

export default function NotFound() {
  return (
    <div className="ui-flex u--items-center ui-justify-center ui-min-h-screen ui-bg-gray-100 ui-text-gray-800">
      <div className="ui-text-center ui-bg-white ui-p-8 rounded ui-shadow-md ui-w-full max-w-md">
        <h1 className="ui-text-4xl ui-font-bold ui-mb-4">404 - Page Not Found</h1>
        <p className="ui-text-lg">Sorry, the page you're looking for does not exist.</p>
      </div>
    </div>
  );
}
