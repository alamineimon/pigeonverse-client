import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillFileImage } from "react-icons/ai";
import { Puff } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const CreatePost = () => {
  const { user, loading, setloading } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const handleApost = (data) => {
    const image = data.img_url[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?key=8ab0829af0fdf06d333782b540e01bbb";
    // console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const post = {
            details: data.details,
            name: user.displayName,
            email: user.email,
            userPhoto: user.photoURL,
            photo: imgData.data.display_url,
          };

          console.log(post);

          //  save the product to the mongodb
          fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((result) => {
              toast("Successfully post created ");
              console.log(result);
              navigate('/media');
              setloading(false);
            });
        }
      });
  };

  // if(loading
  //   ){
  //   return <div className="h-[500px] w-100vh flex justify-center items-center"><Puff
  //   height="80"
  //   width="80"
  //   radius={1}
  //   color="#38afd1"
  //   ariaLabel="puff-loading"
  //   wrapperStyle={{}}
  //   wrapperClass=""
  //   visible={true}
  // /></div>
  // }

  return (
    <div>
      <div className="flex h-[500px] items-center justify-center">
        <div className=" p-5 w-[550px] bg-base-300">
          <div className=" flex mb-10 justify-center items-center">
            <div className=" ">
              <div className=" justify-start mb-6 items-center">
                <div className="ml-4 text-left">
                  <div className="flex mb-2 justify-start items-center">
                  {user?.photoURL ? (
                  <img
                    className="h-12 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    className="h-12 rounded-full"
                    src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                    alt=""
                  />
                )}
                  </div>
                  <p className="text-blue-400">{user?.displayName}</p>
                  <p className="text-sm">{user?.email}</p>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(handleApost)}
                noValidate=""
                action=""
                className="ng-untouched ng-pristine ng-valid"
              >
                <div className=" flex">
                  <textarea
                    id="message"
                    rows={1}
                    name="details"
                    {...register("details", {
                      required: "Please enter some message",
                    })}
                    className="bg-white border border-blue-400 active::border-blue-400 text-blue-400 pl-2 py-2 w-full rounded "
                    placeholder="What's on your mind?"
                  ></textarea>
                  {errors.details && (
                    <div className="alert alert-error mt-1 py-2 block shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{errors.details?.message}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full mt-2 px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select Photo:
                  </label>
                  <input
                    {...register("img_url", {
                      required: "Please give a photo",
                    })}
                    type="file"
                    id="img_url"
                    name="img_url"
                    accept="img_url/*"
                  />
                  {errors.photo && (
                    <div className="alert alert-error mt-1 py-2 block shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{errors.img_url?.message}</span>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  htmlFor="profileEdit"
                  className="bg-white border mt-4 border-blue-400 text-blue-400 font-semibold  py-2 w-full text-center rounded leading-tight hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  POST
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
