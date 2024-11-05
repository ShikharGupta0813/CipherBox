// MessageContainer.js
import React, { useRef, useEffect } from 'react';

function MessageContainer({ selectedUser, userMessages }) {
  const messageEndRef = useRef(null);

  // Effect to scroll to the bottom when messages change
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [userMessages, selectedUser]);

  return (
    <div className="message-container">
      {selectedUser ? (
        userMessages[selectedUser] && userMessages[selectedUser].map((msg, index) => (
          <div key={index} className={`message ${msg.type}-message`}>
            
            {msg.content.includes("data:image") ? (
              <img src={msg.content} alt={msg.name} className="media-message" />
            ) : (
              <div className="message-content">{msg.content}</div>
            )}
          </div>
          
        ))
      ) : (
        <div className="no-user-selected">Please select a user to chat</div>
      )}
      {/* Reference for auto-scrolling */}
      <div ref={messageEndRef} />
    </div>
  );
}

export default MessageContainer;
