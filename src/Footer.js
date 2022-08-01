import React from 'react';

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p>Cotyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
