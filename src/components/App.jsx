import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';
import PasswordGenerator from './PasswordGenerator';
// import './App.css';

const App = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState('');

  const handlePasswordLengthChange = (event) => {
    setPasswordLength(event.target.value);
  };

  const handleGenerate = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generatedPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="app">
      <Header />
      <CreateArea passwordLength={passwordLength} handlePasswordLengthChange={handlePasswordLengthChange} handleGenerate={handleGenerate} />
      <PasswordGenerator password={password} handleCopy={handleCopy} />
      <Footer />
    </div>
  );
};

export default App;
