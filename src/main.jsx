import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import InsightsIndex from './insights/InsightsIndex.jsx';
import ArticlePage from './insights/ArticlePage.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("Caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', backgroundColor: '#330000', color: 'white', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h2>Something went wrong in React.</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#ffaaaa' }}>{this.state.error && this.state.error.toString()}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px', marginTop: '20px' }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

import { ViteReactSSG } from 'vite-react-ssg';

const routes = [
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
  },
  {
    path: '/insights',
    element: <InsightsIndex />,
  },
  {
    path: '/insights/:slug',
    element: <ArticlePage />,
  },
];

export const createRoot = ViteReactSSG({ routes });
