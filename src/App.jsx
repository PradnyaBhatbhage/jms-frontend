

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

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
import Home from './pages/Home';
import AuthorsGuidelines from './pages/AuthorsGuidelines';
import EditorialBoard from './pages/EditorialBoard';
import AdvisoryPanel from './pages/AdvisoryPanel';
import ContactUs from './pages/ContactUs';


function App() {

  return (
    <>

      <PrimeReactProvider>

        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
            <Route path="/user-dashboard" element={<UserDashboard />}></Route>
            <Route path="/reviewer-dashboard" element={<ReviewerDashBoard />}></Route>
            <Route path="/editor-dashboard" element={<EditorDashboard />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/authorGuidelines" element={<AuthorsGuidelines />}></Route>
            <Route path="/editorialBoard" element={<EditorialBoard />}></Route>
            <Route path="/advisoryPanel" element={<AdvisoryPanel />}></Route>
            <Route path="/contactUs" element={<ContactUs />}></Route>

          </Routes>
        </BrowserRouter>
      </PrimeReactProvider >

    </>
  )
}

export default App
