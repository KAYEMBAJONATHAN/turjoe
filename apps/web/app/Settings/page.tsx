'use client';
import React from 'react';

export default function Settings() {
  return (
    <div className="ui-flex ui-items-center ui-justify-center ui-min-h-screen ui-bg-gray-100">
      <div className="ui-bg-white ui-p-8 ui-rounded ui-shadow-md ui-w-full ui-max-w-md">
        <h1 className="ui-text-3xl ui-font-bold ui-mb-6 ui-text-center">Settings</h1>
        <form className="ui-space-y-6">
          <div className="ui-flex ui-items-center">
            <label className="ui-text-lg ui-font-medium ui-mr-4">Notification Preferences</label>
            <input type="checkbox" className="ui-h-5 ui-w-5 ui-border ui-border-gray-300 ui-rounded focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-indigo-400" />
            <span className="ui-ml-2">Enable Email Notifications</span>
          </div>

          <div>
            <label className="ui-block ui-text-lg ui-font-medium ui-mb-2">Change Password</label>
            <input
              type="password"
              placeholder="New Password"
              className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="ui-w-full ui-bg-indigo-500 ui-text-white ui-font-bold ui-py-2 ui-px-4 ui-rounded hover:ui-bg-indigo-600 focus:ui-outline-none focus:ui-ring-2 focus:ui-ring-indigo-400"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
