'use client';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('There was an error sending your message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('There was an error sending your message.');
    }
  };

  return (
    <div className="ui-flex ui-items-center ui-justify-center ui-min-h-screen ui-bg-gray-100">
      <div className="ui-bg-white ui-p-8 ui-rounded ui-shadow-md ui-w-full ui-max-w-md">
        <h1 className="ui-text-2xl ui-font-bold ui-mb-6 ui-text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="ui-space-y-6">
          <div>
            <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded ui-focus:outline-none ui-focus:ring-2 ui-focus:ring-indigo-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="ui-w-full ui-px-4 ui-py-2 ui-border ui-border-gray-300 ui-rounded ui-focus:outline-none ui-focus:ring-2 ui-focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="ui-block ui-mb-2 ui-text-sm ui-font-medium ui-text-gray-700">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
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
        {responseMessage && <p className="ui-mt-4 ui-text-center">{responseMessage}</p>}
      </div>
    </div>
  );
}
