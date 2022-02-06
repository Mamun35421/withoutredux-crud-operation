import React from 'react';
import logo from './logo.svg';
import './App.css';
import DcandidateList from './components/DcandidateList';
import DcandidateForm from './components/DcandidateForm';


function App() {
  return (
    <>
    <DcandidateForm/>
    <DcandidateList/>
    </>
  );
}

export default App;
