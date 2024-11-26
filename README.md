# **CipherBox**  
**Secure Your Data with Ease**  
**_(Work in Progress)_**

CipherBox is a secure file encryption, storage, and sharing platform designed to keep your sensitive files safe. By combining modern encryption techniques with a user-friendly interface, CipherBox ensures your data remains private and protected at all times.

---

## **Status**  
🚧 **This project is currently under development.**  
New features and improvements are being actively worked on. Contributions and suggestions are welcome!

---

## **Features**  
- **File Encryption**: Securely encrypt uploaded files using AES encryption.  
- **Secure File Storage**: Files are stored in encrypted form to ensure maximum security.  
- **User Authentication**: Implemented token-based user authentication for secure access.  
- **File Sharing**: Share encrypted files with other users (upcoming feature).
- **Real-Time Encrypted Chat**: A secure real-time chat system using Socket.io that allows users to communicate with each other while ensuring that all messages are encrypted.
- **Dynamic File Viewer**: View uploaded files and their encrypted versions side by side (in progress).  

---

## **Planned Features**  
- 🔒 **File Decryption**: Allow users to decrypt and download encrypted files.  
- 🔗 **Secure File Sharing**: Share encrypted files with recipient authentication.  
- 📤 **Multi-User Collaboration**: Enable group access and permissions for files.  
- 📈 **Analytics Dashboard**: Show usage stats and file activity.  
- 🎨 **Enhanced UI/UX**: Intuitive file management and encryption workflows.  

---

## **Tech Stack**  
- **Frontend**: React.js, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **Authentication**: JWT (JSON Web Tokens)  
- **Encryption**: AES-256-CBC  

---

## **Setup Instructions**  

### Prerequisites  
Ensure you have the following installed:  
- Node.js (v16 or higher)  
- MongoDB (running locally or in the cloud)  

### Backend Setup  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/CipherBox.git  
   cd CipherBox/backend  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Create a `.env` file in the `backend` directory and add the following:  
   ```plaintext  
   MONGO_URI=your_mongodb_connection_string  
   JWT_SECRET=your_jwt_secret_key  
   ```  

4. Start the server:  
   ```bash  
   npm start  
   ```  
   The backend will run at `http://localhost:3000`.

### Frontend Setup  
1. Navigate to the `frontend` folder:  
   ```bash  
   cd ../frontend  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the development server:  
   ```bash  
   npm start  
   ```  
   The frontend will run at `http://localhost:3001`.  

---

## **Usage**  
1. **Login/Register**: Authenticate to access the platform.  
2. **Upload File**: Select a file to upload and encrypt automatically.  
3. **View Files**: View uploaded files and their encrypted counterparts in the dynamic viewer.  
4. **File Sharing**: (Coming soon) Share encrypted files securely with other users.
5. **Real-Time Encrypted Chat**: Users can send and receive messages in real-time with end-to-end encryption.


---

## **Contributing**  
Contributions are welcome! If you’d like to contribute, please follow these steps:  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-name`).  
3. Commit your changes (`git commit -m "Add feature-name"`).  
4. Push to the branch (`git push origin feature-name`).  
5. Open a pull request.  

---

## **Contact**  
If you have any questions or suggestions, feel free to reach out:  
- Email: shikhargupta484@gmail.com 
- GitHub: [Your GitHub Profile](https://github.com/ShikharGupta0813)  
