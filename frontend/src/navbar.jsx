import "./navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar =()=>{
    const navigate = useNavigate();

    function clickLogin(){
        navigate("/Login");
    }

    function clickSignUp(){
        navigate("/SignUp");
    }

    return(
<div className="nav">
     <h6 className="heading"><b>C</b>ipher<b>B</b>ox</h6>
     <div className="nav2">
     <p className="login" onClick={clickLogin}>Login</p>
     <p className="signup" onClick={clickSignUp}>SignUp</p> 
     </div>
</div>
    );
};

export default Navbar;