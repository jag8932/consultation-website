import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";
import LoginPage from "./pages/LoginPage";
import AccessDenied from './pages/AccessDenied';
import ProtectedRoute from "./components/ProtectedRoute";

import './App.css'

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [content, setContent] = useState(<></>);

  useEffect(()=> {
      fetch("/checkAuth").then(response => response.json()).then(data => {
       setIsAuthorized(data.isAuthorized);
       setResponseMessage(data.message);
    });
  }, []);

  return (
    <>
    
   <BrowserRouter>
    <Routes>
      <Route index element= {<Home />} />
      <Route 
        path="admin" 
        element={<ProtectedRoute isAuthorized={isAuthorized} message={responseMessage}>
        <Admin />
      </ProtectedRoute>} 
      />
      <Route path="signin" element={<LoginPage />} />
      <Route path="accessdenied" element={<AccessDenied message={responseMessage}/>} />
      <Route path ="*" element={<NoPage />} />
      
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
