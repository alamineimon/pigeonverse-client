import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import ProfileDropDown from "./ProfileDropDown";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/" className="hover:bg-white hover:text-blue-400 hover:px-8 ">
          HOME
        </Link>
      </li>
      <li>
        <Link
          to="/media"
          className="hover:bg-white hover:text-blue-400 hover:px-8  "
        >
          MEDIA
        </Link>
      </li>
      <li>
        <Link
          to="/message"
          className="hover:bg-white hover:text-blue-400 hover:px-8 "
        >
          MESSAGE
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          className="hover:bg-white hover:text-blue-400 hover:px-8  "
        >
          ABOUT
        </Link>
      </li>
      
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar px-20 bg-blue-400 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/1rBnjFw/pigeon-logo.png"
            className="h-16"
            alt=""
          />
          <span className="text-2xl">PIGEON VERSE</span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {/* <Link to="/login">
            <p className="bg-white border border-blue-400 text-blue-400 font-semibold  py-2 px-6 text-center rounded leading-tight">
              LOGON
            </p>
          </Link> */}
          {user?.uid ? (
            <>
              {/* <Link to="/bookATable">BOOK A TABLE</Link> */}
              <div>
                <div onClick={() => setOpen(!open)} className="user-pic">
                  {user?.photoURL ? (
                    <img className="h-12 rounded-full cursor-pointer" src={user?.photoURL} alt="" />
                  ) : (
                    <img className="h-12 rounded-full cursor-pointer"
                      src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                      alt=""
                    />
                  )}
                </div>
                {open && <ProfileDropDown></ProfileDropDown>}
                {/* <div id="sub-menu-wrap">
                <div className="sub-menu">
                  <div className="user-info">
                    <img
                      src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                      alt=""
                    />
                    <p>{user?.displayName}</p>
                  </div>
                  <hr />
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/cX6Z03G/profile.png" alt="" />
                    <p>Edite Profile</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/8B3pj1W/setting.png" alt="" />
                    <p>Settings & Privacy</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/myzpv5S/help.png" alt="" />
                    <p>Helps & Support</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p onClick={handleLogout} className="sub-menu-link">
                    <img src="https://i.ibb.co/s335h1Y/logout.png" alt="" />
                    <p>Logout</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                </div>
              </div> */}
              </div>
              {/* <li>
              <button onClick={handleLogout}>LOGOUT</button>
            </li> */}
            </>
          ) : (
              <Link to="/login" className="bg-white border border-blue-400 px-8 text-blue-400 font-semibold  py-2 text-center rounded leading-tight">LOGIN</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
