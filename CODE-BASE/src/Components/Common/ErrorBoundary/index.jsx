// src/components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error loading component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
     return (
  <div style={{
    padding: '2rem',
    textAlign: 'center',
    color: '#D8000C',
    backgroundColor: '#FFD2D2',
    borderRadius: '8px',
    margin: '2rem'
  }}>
    <h2>⚠️ Oops! Something went wrong.</h2>
    <p>Please try again later or contact support if the problem persists.</p>
  </div>
);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
