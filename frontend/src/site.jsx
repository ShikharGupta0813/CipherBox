import "./site.css"
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

const site=()=>{
  return (
    <div className="body2">
      <Navbar/>
    <div className='loadingnum2'>
      <div className="lines2">
      <h2>ENCRYPTED CHAT</h2>
      <h2>AND</h2>
      <h2>DOCUMENT SHARING</h2>
      </div>
      <div className="options">
        <h5 className="docs"> Documents</h5>
        <h5  className="chats">Chats</h5>
      </div>
      <div className='loadingbar2'></div>
      <div className="marquee">
      <div className="marquee__content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae deserunt deleniti delectus saepe excepturi adipisci nobis aliquam perspiciatis voluptatibus eius consequatur sunt vel, labore tempore iusto non at quae repellendus temporibus! Et, magnam.</p>
      </div>
      <div className="marquee__content">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor possimus illo reprehenderit eum, consequatur sit placeat quidem pariatur, velit voluptate natus tenetur nisi dolorum? Voluptatem quos doloremque cum minus tempore blanditiis dolore vel.</p>
      </div>
    </div>
    <div className="extra-content">
      <p><b>CipherBox</b> - Your ultimate vault for secure file storage and private messaging. Protect and share documents with full encryption, control access with ease, and enjoy secure, real-time chats. Keep your data safe and confidential, all in one powerful, user-friendly platform.</p>
    </div>
    </div>
    
    </div>
  );
};

export default site;
