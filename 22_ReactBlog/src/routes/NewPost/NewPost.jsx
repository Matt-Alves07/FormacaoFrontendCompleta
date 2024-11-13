import './NewPost.css';

import { useState } from 'react';
import blogFetch from '../../axios/config'; 
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");

  const createPost = async(e) => {
    e.preventDefault();

    if (title === "" || body === "")
      return;

    const post = { title, body, userId: 1 };
    blogFetch.post("/posts", { body : post });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Create new post</h2>

      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's the post title?"
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">Content:</label>
          <textarea
            name="body"
            id="body"
            onChange={(e) => setbody(e.target.value)}
            placeholder="What's the post body?"
          >
          </textarea>
        </div>

        <input type="submit" value="Create post" className="btn" />
      </form>
    </div>
  )
}

export default NewPost