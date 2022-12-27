import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import "./DropDown.css";

const ProfileDropDown = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast("Logout successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="sub-menu-wrap" className="bg-blue-400 absolute top-[85px] p-5  right-1 w-[300px]">
      <div className="sub-menu">
        <div className="flex justify-start mb-6 items-center ">
          {user?.photoURL ? (
            <img
            className="h-12 rounded-full"
             src={user?.photoURL} alt=""  />
          ) : (
            <img
            className="h-12 rounded-full"
              src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
              alt=""
            />
          )}
          <div className="ml-4">
            <p>{user?.displayName}</p>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>
        <hr />

        <p className="sub-menu-links">
          <img src="https://i.ibb.co/cX6Z03G/profile.png" alt="" />

          <h2>
            <Link to="/profile">Edite Profile</Link>
          </h2>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>

        <p className="sub-menu-links">
          <img src="https://i.ibb.co/8B3pj1W/setting.png" alt="" />
          <p>Settings & Privacy</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>
        <p className="sub-menu-links">
          <img src="https://i.ibb.co/myzpv5S/help.png" alt="" />
          <p>Helps & Support</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>
        <p onClick={handleLogout} className="sub-menu-links">
          <img src="https://i.ibb.co/s335h1Y/logout.png" alt="" />
          <p>Logout</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileDropDown;
