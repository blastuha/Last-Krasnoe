import React from "react";
import Form from "./Form";
import FormDz from "./FormDz";
import FormWithRef from "./FormWithRef";
import Post from "./Post";

const Posts = (props) => {
  console.log("Posts props", props);
  return (
    <div>
      {/* <FormWithRef /> */}
      {/* {props.posts.map((post) => (
        <Post key={post.id} name={post.name} cb={props.cb} />
      ))} */}
    </div>
  );
};

export default Posts;
