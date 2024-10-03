'use client';
import React from 'react';

export default function Contact() {
  return (
    <div className="ui-flex ui-items-center ui-justify-center ui-min-h-screen ui-bg-gray-100">
      <div className="ui-bg-white ui-p-8 ui-rounded ui-shadow-md ui-w-full ui-max-w-md">
        <h1 className="ui-text-2xl ui-font-bold ui-mb-6 ui-text-center">Contact Us</h1>
        <form className="ui-space-y-6">
          <div>
            <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded ui-focus:outline-none ui-focus:ring-2 ui-focus:ring-indigo-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded ui-focus:outline-none ui-focus:ring-2 ui-focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-gray-700">Message:</label>
            <textarea
              name="message"
              className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded ui-focus:outline-none ui-focus:ring-2 ui-focus:ring-indigo-400"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="ui-w-full ui-bg-indigo-500 ui-text-white ui-font-bold ui-py-2 ui-px-4 ui-rounded ui-hover:bg-indigo-600 ui-focus:outline-none ui-focus:ring-2 ui-focus:ring-indigo-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
