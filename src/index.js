import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './style/GlobalStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <GlobalStyles />
    <App />

  </div>
);
