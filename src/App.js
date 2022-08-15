import DisplayPost from "../src/components/DisplayPost/DisplayPost";
import CreatePostForm from "./components/CreatePost/CreatePost";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      name: "James Burgess",
      post: "First!",
      // like: false,
      // dislike: false,
    },
    {
      name: "Ricardo Leon",
      post: "test",
    },
  ]);

  function addNewPost(post) {
    let tempPost = [post, ...posts];

    setPosts(tempPost);
  }

  return (
    <div>
      <CreatePostForm addNewPostProperty={addNewPost} />
      <DisplayPost postEntry={posts} />
    </div>
  );
}

export default App;
