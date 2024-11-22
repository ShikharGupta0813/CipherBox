import "./site.css";
import Navbar from "./navbar.jsx";
import Image1 from "./assets/2.jpeg";
import Image2 from "./assets/flowchart.jpeg";
import Footer from "./footer.jsx";
import React, { useState,useEffect } from 'react';
import gsap from 'gsap';
import { useNavigate } from "react-router-dom";

const site = () => {
 
   
  const navigate=useNavigate();

  const [textAnim1,setTextAnim1] = useState("");
  const [textAnim2,setTextAnim2] = useState("");

  function hovDocument(){
    setTextAnim1("Documents");
    setTimeout(()=>{
      gsap.from(".textAnim1 span", {
        y: 100,
        opacity: 0,
        duration: 0.3,
        delay: 0.2,
        stagger: 0.1
      })
    }, 1);
  }

  function hovChat(){
    setTextAnim2("Chats")
    setTimeout(()=>{
      gsap.from(".textAnim2 span", {
        y: 100,
        opacity: 0,
        duration: 0.3,
        delay: 0.2,
        stagger: 0.1
      })
    }, 1);
  }

  function hovNothingDoc(){
    setTextAnim1("")
  }

  function hovNothingChat(){
    setTextAnim2("")
  }

  function clickDocs(){
    navigate("/Docs");
  }
  function clickChat(){
    navigate("/Chat");
  }

  return (
    <div className="body2">
      <Navbar />
      <div className="loadingnum2">
        <div className="lines2">
          <h2>ENCRYPTED CHAT</h2>
          <h2>
            <img src={Image1} className="src" />
            AND
          </h2>
          <h2>DOCUMENT SHARING</h2>
        </div>
        <div className="loadingbar2"></div>
        <div className="marquee">
          <div className="marquee__content">
            <p>
              Your ultimate vault for secure file storage and private messaging.
              Protect and share documents with full encryption, control access
              with ease, and enjoy secure, real-time chats.
            </p>
          </div>
          <div className="marquee__content">
            <p>
              Your ultimate vault for secure file storage and private messaging.
              Protect and share documents with full encryption, control access
              with ease, and enjoy secure, real-time chats.
            </p>
          </div>
        </div>
        <div className="extra-content">
          <p>
            <b>CipherBox</b> redefines privacy in digital communication and
            storage. It’s perfect for anyone needing a secure way to store,
            share, and manage sensitive files—ideal for professionals, students,
            and anyone who values privacy. With seamless end-to-end encryption,
            it keeps documents safe from unauthorized access and ensures that
            messages stay confidential.
          </p>
          <hr />
          <div className="container4">
            <div className="con1">Shikhar Gupta</div>
            <div className="con2">
              Aspiring Software Development Engineer with a strong foundation in
              Data Structures and Algorithms (DSA), MERN Stack development, and
              cloud technologies. Proficient in C++, Java, and Python, with
              experience deploying scalable web applications on AWS. Skilled in
              enhancing system performance and data security, demonstrated
              through projects involving MERN, NLP, encryption, and secure cloud
              storage.
            </div>
            <div className="con3">
              S:
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/shikhar-gupta-389552251/">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ShikharGupta0813/">Github</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_gupta_shikhar/">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="doc" onMouseEnter={hovDocument} onMouseLeave={hovNothingDoc} onClick={clickDocs}>Document    Sharing And Storage in Encrypted Form <br /><p>Click Here</p>
            <div className="textAnim1">
              {textAnim1.split("").map((char, index) => (<span key={index}>{char}</span>))}
            </div>
          </div>
          <div className="chaT" onMouseEnter={hovChat} onMouseLeave={hovNothingChat} onClick={clickChat}>Encryptrd Chat System <br /> <p>Click Here</p>
            <div className="textAnim2">
              {textAnim2.split("").map((char, index) => (<span key={index}>{char}</span>))}
            </div>
          </div>

         </div>
         <div className="tecH">
          <div className="tech">
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDb</li>
              <li>JWT</li>
              <li>GSAP</li>
              <li>Socket.io</li>
            </ul>
          </div>
          <div className="workflow">
            <ul>
            <li>
            User Authentication: User signs in or registers using JWT/OAuth2 for
            secure access. Document Upload: User uploads a document; it is
            encrypted on the client/server side and stored in AWS S3. Metadata
            and permissions are saved in MongoDB. Permission Setup: User sets
            document permissions (view/edit) and can generate secure links or
            share with specific users. Encrypted Messaging: User initiates chat
            with a contact. Messages are encrypted and sent in real-time using
            Socket.io. Document Retrieval: User requests a document. System
            checks permissions, retrieves it from AWS S3, and decrypts for
            viewing. Logout: User logs out, invalidating session tokens to
            ensure secure exit.
            </li></ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default site;
