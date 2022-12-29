import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailsPost = () => {
  const detailsPost = useLoaderData();
  console.log(detailsPost);

  const { photo, userPhoto, _id, name, details } = detailsPost;
  return (
    <div>
      <div className="px-[300px]">
        {/* <div className="flex">
          <img src={userPhoto} className="rounded-full h-16" alt="" />
          <div className="felx mt-2 h-16">
            <p className="text-blue-400 mt-2">{name}</p>
            <p className="text-sm">Post Time</p>
            </div>
        </div> */}
        <p>{details}</p>
        <img src={photo} className="h-[350px] w-full mb-3 rounded-md" alt="" />
        <div className="flex justify-between">
          <span className="text-blue-400 ">Total likes</span>
          <span className="text-blue-400 pr-2">
            <Link>Total Comments</Link>
          </span>
        </div>

      </div>
    </div>
  );
};

export default DetailsPost;
