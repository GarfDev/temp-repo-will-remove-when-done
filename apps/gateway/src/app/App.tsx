/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import './App.css';

// @ts-ignore
const Dashboard = React.lazy(() => import('DASHBOARD/App'));

export const App = () => (
  <div className="gateway-app">
    <h2>Hello from Gateway</h2>

    <React.Suspense fallback="Loading...">
      <Dashboard />
    </React.Suspense>
  </div>
);
