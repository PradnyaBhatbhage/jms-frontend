

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import UserDashboard from './pages/UserDashboard';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";   
import SignUp from './pages/SignUp';
import ReviewerDashBoard from './pages/ReviewerDashBoard';
import EditorDashboard from './pages/EditorDashboard';
import About from './pages/About';
function App() {

  return (
    <>
     
    <PrimeReactProvider>
      
      <BrowserRouter>
      <Navbar/>
          <Routes>
          
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/register" element={<SignUp/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<SignUp/>}></Route>
            <Route path="/user-dashboard" element={<UserDashboard/>}></Route>
            <Route path="/reviewer-dashboard" element={<ReviewerDashBoard/>}></Route>
            <Route path="/editor-dashboard" element={<EditorDashboard/>}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
    </PrimeReactProvider>
      
    </>
  )
}

export default App
