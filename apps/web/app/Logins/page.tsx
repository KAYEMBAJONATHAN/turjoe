import React from 'react';

export default function Login() {
  return (
    <form action="/api/login" method="POST" className="ui-mx-auto ui-max-w-sm ui-p-4">
      <h2 className="ui-text-xl ui-font-bold ui-mb-4">Login</h2>
      <div className="ui-grid ui-gap-4">
        <div className="ui-grid ui-gap-2">
          <label htmlFor="email" className="ui-text-sm ui-font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            className="ui-border ui-rounded-md ui-p-2 w-full"
            required
          />
        </div>
        <div className="ui-grid ui-gap-2">
          <label htmlFor="password" className="ui-text-sm ui-font-medium">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            className="ui-border ui-rounded-md ui-p-2 vw-full"
            required
          />
        </div>
        <button type="submit" className="ui-w-full ui-bg-blue-600 ui-text-white ui-py-2 ui-rounded-md">
          Login
        </button>
      </div>
      <div className="ui-mt-4 text-center text-sm">
        Don't have an account?{' '}
        <a href="/signup" className="ui-underline ui-text-blue-600">Sign up</a>
      </div>
    </form>
  );
}
