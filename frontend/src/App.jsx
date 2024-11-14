import Signup from "./Signup.jsx"
import Login from "./Login.jsx" 
import Chat from "./chatapp.jsx"
import LoadingAnimation from "./Loading.jsx"
import Site from "./site.jsx"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Docs from "./document.jsx"

function App() {
  
  return (
  <>
   <Router>
      <Routes>
        <Route path="/" element={<LoadingAnimation/>} />
        <Route path="/next" element={<Site/>} />
      </Routes>
   </Router>
   {/* <Docs/> */}
   {/* <Chat/> */}
  </>
  )
}

export default App
