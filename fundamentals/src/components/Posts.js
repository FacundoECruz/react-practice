import { useEffect, useState } from "react";

function Post() {
  const [post, setPost] = useState([]);
  const [selected, setSelected] = useState(null);


  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPost(json);
      });
  };

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    apiGet();
  }, []);

  return post.map((d, i) => {
    return (
      <div className="post-container" key={d.id} onClick={() => toggle(i)}>
        <h3>
          {d.title}
          <span id="user-id">{d.userId}</span>
        </h3>
        <div className={selected === i ? "content-show" : "content"}>
          {d.body}          
        </div>
      </div>
    );
  });
}

export default Post;
