import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { InputForm } from './components/InputForm';
import { MemberCard } from './components/MemberCard';
import Navbar from './Navbar';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/members" element={<MemberCard />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
