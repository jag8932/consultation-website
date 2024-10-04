import { useState, useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";
import './App.css'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route index element= {<Home />} />
      <Route path="admin" element={<Admin />} />
      <Route path ="*" element={<NoPage />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
