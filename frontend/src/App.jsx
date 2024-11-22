import React, { createContext ,useState} from "react"
import { AppContext } from "./appContext";
import Signup from "./Signup.jsx"
import Login from "./Login.jsx" 
import Chat from "./chatapp.jsx"
import LoadingAnimation from "./Loading.jsx"
import Site from "./site.jsx"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Docs from "./document.jsx"

function App() {
  const [token1,setToken1]=useState("");
  return (

      <AppContext.Provider value={{ token1, setToken1 }}>
      <Router>
      <Routes>
      <Route path="/" element={<LoadingAnimation/>} />
      <Route path="/Site" element={<Site/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<Signup/>} />
      <Route path="/Docs" element={<Docs/>} />
      <Route path="/Chat" element={<Chat/>} />
      </Routes>
      </Router> 
   </AppContext.Provider>
  
  )
}

export default App
