// App.js
import React from 'react';
import {BrowserRouter,Routes,Route, } from 'react-router-dom'
import SigninForm from './components/SigninForm1';
import SignupForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import SignInForm from './components/Signinform';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<SignupForm/>} />
        <Route path="/signin" element={<SignInForm/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
