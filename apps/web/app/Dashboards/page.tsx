'use client';
import React from 'react';

export default function Dashboard() {
  return (
    <div className="ui-flex ui-items-center ui-justify-center ui-min-h-screen ui-bg-gray-100">
      <div className="ui-bg-white ui-p-8 ui-rounded ui-shadow-md ui-w-full ui-max-w-md">
        <h1 className="ui-text-3xl ui-font-bold ui-mb-6 ui-text-center">Dashboard</h1>
        <p className="ui-text-lg ui-text-center ui-mb-4">Welcome back!</p>
        <ul className="ui-space-y-4">
          <li className="ui-text-lg ui-font-medium">Recent Activities</li>
          <li className="ui-text-lg ui-font-medium">Quick Access to Forms</li>
          <li className="ui-text-lg ui-font-medium">Latest Updates</li>
        </ul>
      </div>
    </div>
  );
}

