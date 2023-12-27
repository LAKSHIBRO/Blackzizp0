import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/Assets/css/responsive.css';
import '../src/Assets/css/BinaryTree.css';
import 'reactjs-popup/dist/index.css';
import axios from "axios";
axios.defaults.withCredentials = true; // true


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);