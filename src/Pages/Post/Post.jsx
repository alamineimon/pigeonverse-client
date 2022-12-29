import React from "react";
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import { Link } from "react-router-dom";

const Post = ({posts}) => {
    const {photo , userPhoto, email, name , details}= posts

  return (
    <div>
      <div className="px-[300px]">
        <div className="flex">
          <img
            src={userPhoto}
            className="rounded-full h-16"
            alt=""
          />
          <div className="felx mt-2 h-16">
            <p className="text-blue-400 mt-2">{name}</p>
            <p className="text-sm">Post Time</p>
          </div>
        </div>
        <p>{details}</p>
        <img
          src={photo}
          className="h-[350px] w-full mb-3 rounded-md"
          alt=""
        />
        <div className="flex justify-between">
        <span className="text-blue-400 ">Total likes</span>
        <span className="text-blue-400 pr-2"><Link>Total Comments</Link></span>

        </div>
        <div className="flex">
          <FcLike className="text-4xl cursor-pointer" />
          {/* <img
          src="https://i.ibb.co/ykJbJZ3/1021682.png"
          className="h-10"
          alt=""
        /> */}
          {/* <img
          src="https://i.ibb.co/ykJbJZ3/1021682.png"
          className="h-10"
          alt=""
        /> */}
          <FcComments className="text-4xl mx-6 cursor-pointer" />
          {/* <img
          src="https://i.ibb.co/ykJbJZ3/1021682.png"
          className="h-10"
          alt=""
        /> */}
          <FcShare className="text-4xl cursor-not-allowed" />
        </div>
      </div>
    </div>
  );
};

export default Post;
