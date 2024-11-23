import "./navbar.css"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, {useContext } from 'react';
import  { AppContext } from "./appContext";

const Navbar =()=>{
    const{islogged,setIslogged}=useContext(AppContext);
    const navigate = useNavigate();

    function clickLogin(){
        if(!islogged){
        navigate("/Login");
    }else{
        toast.warn("You are already logged in !!")
    }}

    function clickSignUp(){
        if(!islogged){
        navigate("/SignUp");
    }else{
        toast.warn("You are already logged in !!")
    }}

    return(
        <>
<div className="nav">
     <h6 className="heading"><b>C</b>ipher<b>B</b>ox</h6>
     <div className="nav2">
     <p className="login" onClick={clickLogin}>Login</p>
     <p className="signup" onClick={clickSignUp}>SignUp</p> 
     </div>
</div>
<ToastContainer/>
</>
    );
};

export default Navbar;