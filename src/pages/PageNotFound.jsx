import React from 'react';

export default function PageNotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          404
        </div>
        
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#374151',
          marginBottom: '0.5rem'
        }}>
          Page Not Found
        </h1>
        
        <p style={{
          color: '#6b7280',
          marginBottom: '1.5rem',
          fontSize: '1rem'
        }}>
          The page you're looking for doesn't exist.
        </p>
        
        <button 
          onClick={() => window.location.href = '/'}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.5rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}