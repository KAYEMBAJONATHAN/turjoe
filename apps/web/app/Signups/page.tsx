import React from 'react';

export default function SignUp() {
  return (
    <form action="/api/signup" method="POST" className="ui-mx-auto ui-max-w-md ui-p-6 ui-bg-white ui-shadow-md ui-rounded-lg">
      <h2 className="ui-text-2xl ui-font-bold ui-text-gray-800 ui-mb-6 ui-text-center">Create Your Account</h2>
      <div className="ui-grid ui-gap-6">
        <div className="ui-grid ui-grid-cols-2 ui-gap-6">
          <div className="ui-grid ui-gap-2">
            <label htmlFor="firstName" className="ui-text-sm ui-font-semibold ui-text-gray-700">First Name</label>
            <input
              id="firstName"
              name="firstName"
              placeholder="Max"
              className="ui-border ui-border-gray-300 ui-rounded-md ui-p-3 ui-w-full uifocus:ring ui-focus:ring-blue-200 ui-focus:border-blue-500"
              required
            />
          </div>
          <div className="ui-grid ui-gap-2">
            <label htmlFor="lastName" className="ui-text-sm ui-font-semibold ui-text-gray-700">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Robinson"
              className="ui-border ui-border-gray-300 ui-rounded-md ui-p-3 ui-w-full ui-focus:ring ui-focus:ring-blue-200 ui-focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="ui-text-sm ui-font-semibold ui-text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            className="ui-border ui-border-gray-300 ui-rounded-md ui-p-3 ui-w-full ui-focus:ring ui-focus:ring-blue-200 ui-focus:border-blue-500"
            required
          />
        </div>

        <div className="ui-grid ui-gap-2">
          <label htmlFor="password" className="ui-text-sm ui-font-semibold ui-text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            className="ui-border ui-border-gray-300 ui-rounded-md ui-p-3 ui-w-full ui-focus:ring ui-focus:ring-blue-200 ui-focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="ui-w-full ui-bg-blue-600 ui-text-white ui-py-3 ui-rounded-md ui-hover:bg-blue-700 ui-focus:ring ui-focus:ring-blue-300"
        >
          Create an Account
        </button>
      </div>
    </form>
  );
}
