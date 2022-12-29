import { useQuery } from "@tanstack/react-query";
import React from "react";
import Post from "../Post/Post";


import SmallSpinner from "../Shared/Spinner/SmallSpinner";


const Media = () => {
  const {
    data: posts = [],
    
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/posts");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <SmallSpinner/>;
  }
  return (
// <div className=" justify-center flex flex-col lg:flex-row-reverse ">

//         <div className="grid gap-6 grid-cols-1  my-6">
//           {posts.map((posts) => (
//             <ShowAllPost key={posts._id} posts={posts} ></ShowAllPost>
//           ))}
//         </div>
        
//       </div>
    <div>
      <div className="grid grid-cols-1 gap-6">
      {posts.map((posts) => (
            <Post key={posts._id} posts={posts} ></Post>
          ))}
      </div>
    </div>
  );
};

export default Media;
