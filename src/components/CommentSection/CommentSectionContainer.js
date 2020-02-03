// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const { commentsState, setCommentsState } = useState(props.comments);
  console.log("props.comments: ", props.comments)
  console.log("commentsState: ", commentsState) // ???????????????????????????????????????????????????????????????
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {/* <Comment username={props.comments[0].username} text={props.comments[0].text} /> */}
      {props.comments.map(element => {
        console.log(element);
        return <Comment username={element.username} text={element.text} key={Math.random()} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
