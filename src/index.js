import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from react-dom/client for React 18
import { Provider } from 'react-redux';
import {store} from './app/store'; // Assuming your store is configured in store.js
import App from './App'; // Assuming your main application component is App

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot for React 18
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);