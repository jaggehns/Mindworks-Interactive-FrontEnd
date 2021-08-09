import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CommentsHero from "../components/CommentsHero";
import Comments from "../components/Comments";
import { useLocation } from "react-router-dom";

function Screen2() {
  const location = useLocation();

  const [posts, setPosts] = useState([]);

  function getPosts() {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${location.state}`;
    console.log(url);
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
      <CommentsHero />
      <Comments posts={posts} />
    </>
  );
}

export default Screen2;
