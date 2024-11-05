import { useState,useMemo } from "react";
import "./chatapp.css";
import Search from "./searchbar"
import UserList from "./userlist"; // Import the UserList component
import MessageContainer from "./messages"; // Import the new MessageContainer component
import WriteMessage from "./write"; // Import the WriteMessage component

function Chat() {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file
  const [users] = useState(["User1", "User2", "User3", "User4", "User5"]); // Example user list
  const [selectedUser, setSelectedUser] = useState(null); // State to track the selected user
  const [userMessages, setUserMessages] = useState({}); // State to track messages for each user
  const [searchTerm, setSearchTerm] = useState(""); // State to track search query

  

  const handleSendMessage = () => {
    if (!selectedUser) return; // Return if no user is selected

    if (message.trim() !== "") {
      const newMessage = { type: 'sent', content: message, timestamp: new Date() };

      setUserMessages(prevUserMessages => ({
        ...prevUserMessages,
        [selectedUser]: [...(prevUserMessages[selectedUser] || []), newMessage]
      })); // Add sent message to the selected user

      setMessage(""); // Clear input after sending
    }

    if (selectedFile) {
      handleSendFile(selectedFile); // Handle sending the file
      setSelectedFile(null); // Clear the selected file after sending
    }
  };

  const handleSendFile = (file) => {
    if (!selectedUser) return; // Return if no user is selected

    const reader = new FileReader();
    reader.onloadend = () => {
      const newMessage = { type: 'sent', content: reader.result, name: file.name, timestamp: new Date() };

      setUserMessages(prevUserMessages => ({
        ...prevUserMessages,
        [selectedUser]: [...(prevUserMessages[selectedUser] || []), newMessage]
      })); // Add sent file message to the selected user
    };
    reader.readAsDataURL(file); // Convert the file to a data URL
  };

  // Simulating receiving a message (for testing)
  const handleReceiveMessage = () => {
    if (!selectedUser) return; // Return if no user is selected

    const newMessage = { type: 'received', content: "Hello! This is a message from the other user.", timestamp: new Date() };

    setUserMessages(prevUserMessages => ({
      ...prevUserMessages,
      [selectedUser]: [...(prevUserMessages[selectedUser] || []), newMessage]
    })); // Add received message to the selected user
  };

  // Handle selecting a user from the list
  const handleSelectUser = (user) => {
    setSelectedUser(user); // Set the selected user
  };

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle blocking a user
  const handleBlockUser = (user) => {
    console.log(`Blocked user: ${user}`);
    // Implement block functionality (e.g., prevent sending/receiving messages)
  };

  // Handle deleting chat with a user
  const handleDeleteChat = (user) => {
    setUserMessages(prevUserMessages => ({
      ...prevUserMessages,
      [user]: [] // Clear messages for the selected user
    }));
    console.log(`Deleted chat for user: ${user}`);
  };
  return (
    <div className="chat-container">
      <div className="user-list-container">
        <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
        <UserList 
          users={filteredUsers} 
          onSelectUser={handleSelectUser} 
          selectedUser={selectedUser}
          onBlockUser={handleBlockUser} 
          onDeleteChat={handleDeleteChat} 
        />  {/* Render the filtered user list */}
      </div>
      <div className="mainbox">

        {/* Import the MessageContainer component here */}
        <MessageContainer 
          selectedUser={selectedUser} 
          userMessages={userMessages} 
        />

        {/* Import the WriteMessage component here */}
        <WriteMessage 
          message={message} 
          setMessage={setMessage} 
          handleSendMessage={handleSendMessage} 
          setSelectedFile={setSelectedFile} 
          selectedUser={selectedUser} 
          handleReceiveMessage={handleReceiveMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
