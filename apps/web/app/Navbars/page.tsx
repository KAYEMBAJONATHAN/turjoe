import React from 'react';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="/" style={linkStyle}>HomePage</a></li>
        <li style={liStyle}><a href="/UserForms" style={linkStyle}>UserForm</a></li>
        <li style={liStyle}><a href="/Calculators" style={linkStyle}>Calculator</a></li>
        <li style={liStyle}><a href="/Abouts" style={linkStyle}>About</a></li>
        <li style={liStyle}><a href="/Contacts" style={linkStyle}>Contact</a></li>
        <li style={liStyle}><a href="/Dashboards" style={linkStyle}>Dashboard</a></li>
        <li style={liStyle}><a href="/Profiles" style={linkStyle}>Profile </a></li>
        <li style={liStyle}><a href="/Settings" style={linkStyle}>Settings</a></li>
        <li style={liStyle}><a href="/Logins" style={linkStyle}>Login</a></li>
        <li style={liStyle}><a href="/NotFounds" style={linkStyle}>NotFound</a></li>
      </ul>
    </nav>
  );
}

const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
  textAlign: 'center' as const,
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'end',
};

const liStyle = {
  margin: '0 15px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};
