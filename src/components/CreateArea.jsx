import React from 'react';

const CreateArea = (props) => {
  return (
    <div className="create-area">
      <h2>Create Your Password</h2>
      <div className="form">
        <label>Password Length:</label>
        <input type="number" min="6" max="30" value={props.passwordLength} onChange={props.handlePasswordLengthChange} />
        <button onClick={props.handleGenerate}>Generate Password</button>
      </div>
    </div>
  );
};

export default CreateArea;
