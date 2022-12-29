import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    const [isReadOnly, setIsReadOnly] = useState(true)
  console.log(user);
  return (
    <div className=" mt-16 px-64 ">
      <div className=" p-10">
        <h1 className="text-3xl">Acount</h1>
        <hr className="mt-2 h-[2px] bg-blue-400 mb-4" />

        <from
       
          className="space-y-12 px-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex mr-6 space-between">
                {user?.photoURL? <img
                className="rounded-full h-28"
                  src={user?.photoURL}
                  alt=""
                />
              :
              <img
              className="rounded-full h-28"
                  src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                  alt=""
                  
                />
              }
              </div>
              <div>
                <p>{user?.displayName}</p>
                <p>{user?.email}</p>
              </div>
            </div>

            <div className="flex w-full justify-between">
              <div className="w-1/2 mr-2">
                <label htmlFor="FirstName" className="block mb-2 text-sm">
                  First Name
                </label>
                <input
                 disabled={isReadOnly}
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="LastName" className="block mb-2 text-sm">
                  Last Name
                </label>
                <input
                 disabled={isReadOnly}
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
               disabled={isReadOnly}
                required
                type="email"
                name="email"
                readOnly
                value={user?.email}
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="phoneNumber" className="text-sm">
                  Phone Number
                </label>
              </div>
              <input
               disabled={isReadOnly}
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                required
                placeholder="Enter Your Number Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="bio" className="text-sm">
                  Bio
                </label>
              </div>
              <textarea
              disabled={isReadOnly}
                type="text"
                name="bio"
                id="bio"
                
                required
                placeholder="Enter Your Bio Here"
                className="w-full px-3 py-2 h-32 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2 ">
            <button className="bg-white border border-blue-400 text-blue-400 font-semibold  py-2 px-6 text-center rounded leading-tight hover:text-white hover:bg-blue-400 hover:border-blue-400">SUBMIT</button>
          </div>
        </from>
          <div className="space-y-2 absolute top-[200px] right-[305px]">
            <div className="buttons flex">
              <button onClick={() => setIsReadOnly(prev => !prev)} className="update">Edite</button>
              {/* <button onClick={handleCancel} className="cancel">Cancel</button> */}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
