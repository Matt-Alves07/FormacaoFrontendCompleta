import './Post.css';

import blogFetch from '../../axios/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const [ post, setPost ] = useState({});

    const getPost = async() => {
        try {
            console.log(id);
            const response = await blogFetch.get(`/posts/${id}`);

            setPost(response.data);
        } catch (error) {
            console.log(`Error trying to get the post. Details: ${error}`);
        }
    };

    useEffect(() => { getPost()}, []);

    return (
        <div className="post-container">
            {
                !post.title
                    ? (<p>Loading...</p>)
                    : (
                        <div className="post">
                            <h2>{post.title}</h2>

                            <p>{post.body}</p>
                        </div>
                    )
            }
        </div>
    )
}

export default Post;