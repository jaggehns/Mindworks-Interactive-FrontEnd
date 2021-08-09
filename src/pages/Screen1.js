import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Posts from "../components/Posts";

function Screen1() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setPosts(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Posts posts={posts} />
    </>
  );
}
export default Screen1;
