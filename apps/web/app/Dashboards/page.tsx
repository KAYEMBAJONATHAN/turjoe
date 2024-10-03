import React from 'react';

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>Notification Preferences</label>
        <input type="checkbox" /> Enable Email Notifications
      </div>
      <div>
        <label>Change Password</label>
        <input type="password" placeholder="New Password" />
      </div>
      <button>Save Changes</button>
    </div>
  );
}
