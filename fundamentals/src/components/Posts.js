import { useEffect, useState } from "react";

function Post() {
  const [post, setPost] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPost(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return post.map((d) => {
    return (
      <div className="post-container" key={d.id}>
        <h3>{d.title}</h3>
      </div>
    );
  });
}

export default Post;
