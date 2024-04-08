import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './learningReact/Counter';
import Cal from './componenets/calculator/Cal';
// import App from './App';
// import Cal from './componenets/calculator/Cal';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Cal/>
  </React.StrictMode>
);
