'use client';
import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
