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
   {/* <Router>
      <Routes>
      <Route path="/" element={<LoadingAnimation/>} />
      <Route path="/next" element={<Site/>} />
      </Routes>
      </Router> */}
   {/* <Docs/> */}
   {/* <Chat/> */}
   <Login/>
   </AppContext.Provider>
  
  )
}

export default App
