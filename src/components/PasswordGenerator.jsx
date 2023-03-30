import React from 'react';

const PasswordGenerator = (props) => {
  return (
    <div className="password-generator">
      <h2>Your Password:</h2>
      <div className="password">
        <input type="text" value={props.password} readOnly />
        <button onClick={props.handleCopy}>Copy to Clipboard</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
