import { useState } from 'react';
import "./Login.css"
function Login(){
        const [showPassword, setShowPassword] = useState(false);
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

        const logfunction=(e)=>{
            e.preventDefault();
            fetch('http://localhost:3000/CipherBox/login', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "username":username,
                    "password":password
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
    <div className="container">
        <div className="left"></div>
        <div className="right">
        <h1>Login Page</h1>
         <form action="/" className="log" onSubmit={logfunction}>
         <div className="input-container">
         <span className="icon1">👤</span>
         <input type="text"name="username" placeholder="       USERNAME" className="username"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
         </div>
         <br/>
         <div className="pssword-container">
            <span className="icon">🔒</span>
         <input type={showPassword ? "text" : "password"}  name="password" placeholder="       PASSWORD" className="password"  value={password} onChange={(e)=>setPassword(e.target.value)} /><br /><br />
         <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? '👁️' : '🙈'}
            </span>
            </div><br />
         <button name="LogIn" className="LogIn" type="submit">Log In</button>
         </form>
        </div>
    </div>
    )
}
export default Login; 