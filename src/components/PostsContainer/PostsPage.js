//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  const [dummyData, setDummyData] = useState(props)
  console.log(dummyData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {dummyData.post.map(element => {
        console.log(element);
        return <Post post={element} key={Math.random()}/>
      })}
    </div>
  );
};

export default PostsPage;

