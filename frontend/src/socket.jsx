import{io} from "socket.io-client"
import { useEffect,useState,useMemo } from "react";
import"./socket.css"
import Write from "./write"
import Userlist from "./userlist"

function Connection(){
    
    const[message,setMessage]=useState("")
    const socket=useMemo(()=>{io("http://localhost:8000")},[]); 

    const handlemsgs=(e)=>{
     e.preventDefault();
     socket.emit("message",{message});
      setMessage("");
    }


    return(
        {/* // <div className="hi">WELCOME</div>
        // <form action="/" onSubmit={handlemsgs}>
        // <input type="text" className="msg" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
        // <button type="submit" className="btnn" >Send</button>
        // </form> */}
    )
}
export default Connection;