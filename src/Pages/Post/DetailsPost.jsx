import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const DetailsPost = (props) => {
  const detailsPost = useLoaderData();
  console.log(detailsPost);
  
  const navigate = useNavigate();

  const { photo, userPhoto, name, details } = detailsPost;
  const [user, setUser] = useState(detailsPost);

  const handlePostComment = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/posts/${detailsPost._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/media')
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };


  return (
    <div>
      <div className="px-[300px]">
        <div className="flex">
          {detailsPost?.userPhoto ? (
            <img src={userPhoto} className="rounded-full h-16 mr-4" alt="" />
          ) : (
            <img
              className="h-12 rounded-full cursor-pointer"
              src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
              alt=""
            />
          )}

          <div className="felx mt-2 h-16">
            <p className="text-blue-400 mt-2">{name}</p>
            <p className="text-sm">Times:</p>
          </div>
        </div>
        <p>{details}</p>
        <img
          src={photo}
          className="h-[350px] mt-2 w-full mb-3 rounded-md"
          alt=""
        />
        {/* <div className="flex justify-between">
          <span className="text-blue-400 ">Total likes</span>
          <span className="text-blue-400 pr-2">
            <Link>Total Comments</Link>
          </span>
        </div> */}

        <form
          // onSubmit={handlePostComment}
          onSubmit={handlePostComment}
          noValidate=""
          action=""
          className="space-y-12 px-12 ng-untouched ng-pristine ng-valid"
        >
          <input
            onChange={handleInputChange}
            type="text"
            name="comment"
            placeholder="Add a comment..."
            className="w-full px-3 py-1 border rounded-md  border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
          />
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsPost;
