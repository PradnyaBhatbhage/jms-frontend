
import { Menubar } from "primereact/menubar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPencil,
  faNewspaper,
  faSignIn,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";


export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const isUserLoggedIn = sessionStorage.getItem('email');
    setIsLoggedIn(!!isUserLoggedIn);
  }, []);
  const navigate = useNavigate();
  const login = () => {
    navigate('/login');
    setIsLoggedIn(true);
  }

  const logout = () => {
    navigate('/login');
    setIsLoggedIn(false);
  }


  const items = [
    {

      icon: (
        <span>
          <FontAwesomeIcon icon={faHouse} /> Home
        </span>
      ),
      url: "/home"
    },
    {

      icon: (
        <span>
          <FontAwesomeIcon icon={faPencil} className="fa-icon" /> About
        </span>
      ),
      url: "/about"
    },
    {

      icon: (
        <span>
          <FontAwesomeIcon icon={faNewspaper} /> Journals
        </span>
      ),
    },
    {

      icon: (
        <span>
          <FontAwesomeIcon icon={faRectangleList} /> Register
        </span>
      ),

      url: "/register"
    },
  ];

  const start = (
    <img
      alt="logo"
      src="/src/assets/logo-black.png"
      height="100"
      className="mr-2"
    ></img>
  );

  const end = (
    <div>
      <Button onClick={login} style={{ padding: "10px", margin: "10px" }} label="Login" severity="success" />
      <Button onClick={logout} style={{ padding: "10px", margin: "10px" }} label="Logout" severity="danger" />
    </div>
  )



    ;

  return (
    <div className="card">
      <Menubar /* className="navbar-container" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }} */ model={items} start={start} end={end} />
      {/* <i className="fa-regular fa-rectangle-list"></i> */}
    </div>
  );
}
