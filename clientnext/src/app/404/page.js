'use client'

import React from 'react';

function Notfound() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#fce4ec', // Pink background color
    },
    text: {
      fontSize: '48px',
      color: '#880e4f', // Dark pink text color
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.text}>404</div>
    </div>
  );
}

export default Notfound;
