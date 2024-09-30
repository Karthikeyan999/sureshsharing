import React from 'react'

const Footer = () => {
    const footerStyles = {
        container: {
          textAlign: 'center',
          padding: '10px 0',
          backgroundColor: '#f1f1f1',
        },
        text: {
          color: '#555',
          fontSize: '14px',
        },
      };
  return (
    <footer style={footerStyles.container}>
      <p style={footerStyles.text}>© 2024 Your Company. All rights reserved.</p>
    </footer>
  )
}

export default Footer