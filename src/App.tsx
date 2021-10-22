import React from 'react';
import NavBar from './components/common/NavBar';
import Banner from './components/home/Banner';
import LoginForm from './components/home/LoginForm';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <LoginForm />
    </>
  );
}

export default App;
