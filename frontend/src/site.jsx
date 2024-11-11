import "./site.css";
import Navbar from "./navbar.jsx";
import Image1 from "./assets/2.jpeg";
import Footer from "./footer.jsx";

const site = () => {
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
            <div className="con3">S:
              <ul>
                <li><a href="https://www.linkedin.com/in/shikhar-gupta-389552251/">Linkedin</a></li>
                <li><a href="https://github.com/ShikharGupta0813/">Github</a></li>
                <li><a href="https://www.instagram.com/_gupta_shikhar/">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="doc"></div>
          <div className="chaT"></div>
        </div>
      </div>
    </div>
  );
};

export default site;
