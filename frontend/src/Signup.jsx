import "./Signup.css"
import { useState } from "react";
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,500,700,900&display=swap" rel="stylesheet"></link>
function Signup(){

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const triggerfunction=(e)=>{
        e.preventDefault();
        fetch('http://localhost:3000/CipherBox/signup', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username":username,
                "name":name,
                "password":password,
                "email":email
            })
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log(data); // Handle the response data
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }
    return(
      <div className="outer-container2">
       <div className="box">
        <div className="left1"></div>
        <div className="right1">
        <h1 className="head">Signup Page</h1>
         <form action="/" className="sign" onSubmit={triggerfunction} >
         <input type="text"name="name" placeholder="NAME" className="name" value={name} onChange={(e)=>setName(e.target.value)}/><br />
         <input type="text"name="username" placeholder="USERNAME" className="username" value={username} onChange={(e)=>setUsername(e.target.value)}/><br />
         <input type="text"name="email" placeholder="Email" className="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <br />
         <input type="text"name="password" placeholder="PASSWORD" className="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
         <button name="SignUp" type="submit" className="SignUp">SignUp</button>
         </form>
        </div>
      </div>
    </div>  
  )
}
export default Signup; 