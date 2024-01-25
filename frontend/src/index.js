import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AlertManager from "./AlertManager";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/* Alert manager is used by alerts(popup messages that occur when an action is performed by user)
   to display themselves without breaking the react component logic by appending them in runtime using vanilla JavaScript DOM */
ReactDOM.render(<AlertManager />, document.getElementById("AlertsManager"));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import AlertManager from './AlertManager';

// const root = document.getElementById('root');
// const alerts_manager = document.getElementById('AlertsManager'); // New container element

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   root
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <AlertManager />
//   </React.StrictMode>,
//   alerts_manager // Render the AlertManager component to the separate div
// );
