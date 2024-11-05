import React, { useState } from "react";

const UserList = ({ users, onSelectUser,selectedUser, onBlockUser, onDeleteChat }) => {
  const [openSettings, setOpenSettings] = useState(null); // State to track which user's settings are open

  const toggleSettings = (user) => {
    if (openSettings === user) {
      setOpenSettings(null); // Close settings if already open
    } else {
      setOpenSettings(user); // Open settings for the selected user
    }
  };

  return (
    <div className="user-list">
      {users.map((user, index) => (
        <div key={index} className="user-item">
          
          <div className="prof"></div>
          <span onClick={() => onSelectUser(user)} className={`user-ite ${user === selectedUser ? 'active' : ''}`}>{user}</span>
          
          {/* Settings Icon */}
          <span className="settings-icon" onClick={() => toggleSettings(user)}>
            ⚙️ {/* You can replace this with any settings icon you like */}
          </span>
        
          {/* Settings Box */}
          {openSettings === user && (
            <div className="user-settings">
              <div onClick={() => onBlockUser(user)}>Block</div>
              <div onClick={() => onDeleteChat(user)}>Delete Chat</div>
            </div>
             
          )}
        </div>
      ))}
      
    </div>
  );
};

export default UserList;
