
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
      url: "/"
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
    }
  ];

  const start = (
    <img
      alt="logo"
      src="/src/assets/logo-black.png"
      height="100"
      className="mr-2"
    ></img>
  );




    ;

  return (
    <div className="card"  style={{ width:"100%", zIndex:'1000'}}>
      <Menubar /* className="navbar-container" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }} */ model={items} start={start} />
      {/* <i className="fa-regular fa-rectangle-list"></i> */}
    </div>
  );
}
