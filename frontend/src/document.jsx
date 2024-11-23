import "./document.css";
import React,{useState,useContext} from "react";
import { AppContext } from "./appContext"; 

const Docs = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const {token1} = useContext(AppContext);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Store the selected file in state
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:3000/CipherBox/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token1}`, // Pass token in Authorization header
        },
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("File uploaded successfully!");
        console.log(response);
      } else {
        setUploadStatus("Failed to upload the file.");
        console.log(response);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("An error occurred during file upload.");
    }
  };

  return (
    <div className="main2">
        <div className="heaD">CipherBox</div>
        <div className="upload"><input type="file" onChange={handleFileChange} onClick={handleUpload}/></div>
        <div className="store">Store</div>
        <div className="share">Share</div>
      <div className="main3">
        <div className="normal"></div>
        <div className="encrypted"></div>
      </div>
    </div>
  );
};

export default Docs;
