import './Home.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
import blogFetch from '../../axios/config';
import { useState, useEffect } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Adicionei um estado para o loading

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Atualiza o estado para indicar que o loading terminou
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Last posts</h1>

      {loading ? <p>Loading...</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className='btn'>Read more</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
