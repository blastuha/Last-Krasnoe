import React from "react";

const Post = (props) => {
  return (
    <div>
      Post
      <h1 onClick={props.cb}>{props.name}</h1>
    </div>
  );
};

export default Post;
