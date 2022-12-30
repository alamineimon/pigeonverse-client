import React, { useContext, useState } from "react";
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import { Puff } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ReactTimeago from "react-timeago";
import { AuthContext } from "../../context/AuthProvider";
import Message from "../Message/Message";

const Post = ({ posts }) => {
  const { user , loading } = useContext(AuthContext);
  const { photo, userPhoto, _id, name, details , comment } = posts;

  const [open, setOpen] = useState(false);
  
  const [like, setLike] = useState(1);
  const [disLike, setDislike] = useState(true);
  const [active, setActive] = useState(false);
  const [disLikeActive, setDislikeActive] = useState(false);
  
  
  // //comment
  // const [todos, setTodos] = useState([]);
  // const addTOdo = todo =>{
  //   if(!todo.text || (todo.text)){
  //     return
  //   }
  //   const newTodos = [todo , ...todos]
  //   setTodos(newTodos)
  //   console.log(...todos);
  // }




  function likeFunction() {
    if (active) {
      setActive(false);
      setLike(like + 1);
    } else {
      setActive(true);
      setLike(like + 1);
      if (disLikeActive) {
        setDislikeActive(false);
        setLike(like + 1);
        setDislike(disLike + 1);
      }
    }
  }

  /// need to set like cout

  return (
    <div>
      <div className="px-[300px]">
        <div className="flex">
          {posts?.userPhoto ? (
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
        <p className="text-justify pr-3 mb-3">{details}</p>

        <img src={photo} className="h-[350px] w-full mb-3 rounded-md" alt="" />
        <div className="flex justify-between">
          <span className="text-blue-400 ">{like} likes</span>
          <span className="text-blue-400 pr-2">
            <Link>Total Comments</Link>
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <FcLike
              onClick={likeFunction}
              className="text-4xl cursor-pointer"
            />
            

            <FcComments
              onClick={() => setOpen(!open)}
              className="text-4xl mx-6 cursor-pointer"
            />

            <FcShare className="text-4xl cursor-not-allowed" />
          </div>
          <Link
            to={`/detailspost/${_id}`}
            className="bg-white border mt-2 px-20 border-blue-400 text-blue-400 font-semibold  py-1 text-center rounded leading-tight hover:text-white hover:bg-blue-400 hover:border-blue-400"
          >
            SHOWMOE
          </Link>
        </div>
        {open && (
          <input
            type="text"
            placeholder="Enter your comment"
            className="w-full px-3 py-1 border rounded-md  border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
          />
        )}
        {/* <Message onSubmit={addTOdo}></Message> */}
        {comment}
      </div>
    </div>
  );
};

export default Post;
