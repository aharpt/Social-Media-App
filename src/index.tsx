import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/home/Home';
import Notifications from './components/notifications/Notifications';
import reportWebVitals from './reportWebVitals';

const notifications = [
  {
    id: 1,
    title: "Notification 1", 
    text: "Lorem ipsum dolor sit amet...",
  },
  {
    id: 2,
    title: "Notification 2", 
    text: "Lorem ipsum dolor sit amet...",
  },
  {
    id: 3,
    title: "Notification 3", 
    text: "Lorem ipsum dolor sit amet...",
  }
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notifications notifications={notifications} />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
