import "./App.css";
import Posts from "./components/Posts";
import React, { useState } from "react";
import UncontrolledForm from "./components/UncontrolledForm";

function App() {
  const [posts, setPosts] = useState([
    { id: "1", name: "Misha 1" },
    { id: "2", name: "Misha 2" },
    { id: "3", name: "Misha 3" },
  ]);

  const handleOk = () => {
    console.log("handleOk");
  };

  return (
    <div className="App">
      <UncontrolledForm />
      {/* <Posts posts={posts} cb={handleOk} /> */}
    </div>
  );
}

export default App;
