// src/app/ExplorePage.js
"use client"
export default function ExplorePage() {
    return (
      <div style={styles.container}>
        <h1 style={styles.text}>Explore</h1>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    text: {
      fontSize: '3rem',
      fontWeight: 'bold',
    },
  };
  