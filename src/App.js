import DisplayPost from "../src/components/DisplayPost/DisplayPost";
import CreatePostForm from "./components/CreatePost/CreatePost";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      name: "James Burgess",
      post: "First!",
      // like: false,
      // dislike: false,
    },
  ]);

  function addNewPost(post) {
    let tempPost = [post, ...posts];

    setPosts(tempPost);
  }

  return (
    <div>
      <NavBar />
      <CreatePostForm addNewPostProperty={addNewPost} />
      <DisplayPost postEntry={posts} />
    </div>
  );
}

export default App;
