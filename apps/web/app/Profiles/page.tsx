'use client';
import React from 'react';

export default function Profile() {
  return (
    <div className="ui-flex ui-items-center ui-justify-center ui-min-h-screen ui-bg-gray-100">
      <div className="ui-bg-white ui-p-8 ui-rounded ui-shadow-md ui-w-full ui-max-w-md">
        <h1 className="ui-text-3xl ui-font-bold ui-mb-6 ui-text-center">Your Profile</h1>
        <div className="ui-space-y-4">
          <p className="ui-text-lg ui-font-medium">Name: <span className="ui-font-normal">John Doe</span></p>
          <p className="ui-text-lg ui-font-medium">Email: <span className="ui-font-normal">john.doe@example.com</span></p>
          <button
            className="ui-w-full ui-bg-indigo-500 ui-text-white ui-font-bold ui-py-2 ui-px-4 ui-rounded hover:ui-bg-indigo-600 focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-indigo-400"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
