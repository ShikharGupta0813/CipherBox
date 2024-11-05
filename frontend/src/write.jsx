// WriteMessage.js
import React from 'react';

function WriteMessage({ message, setMessage, handleSendMessage, setSelectedFile, selectedUser,handleReceiveMessage }) {
  return (
    <div className="write">
      <input
        type="text"
        className="msg"
        placeholder="Enter Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} // Send on 'Enter' key
        disabled={!selectedUser} // Disable if no user is selected
      />
      <label className="file-input-label">
        🗄
        <input
          type="file"
          className="file-input"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          disabled={!selectedUser} // Disable if no user is selected
        />
      </label>

      <button className="send-btn" onClick={handleSendMessage} disabled={!selectedUser}>Send</button>
      <button className="receive-btn" onClick={handleReceiveMessage} disabled={!selectedUser}>Receive</button>
    </div>
  );
}

export default WriteMessage;
