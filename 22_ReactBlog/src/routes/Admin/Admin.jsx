import "./Admin.css";

import blogFetch from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
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

    const deletePost = async(id) => {
        if (id === null || id === 0)
            return;

        try {
            await blogFetch.delete(`/posts/${id}`);

            const filteredPosts = posts.filter((post) => post.id !== id);
            setPosts(filteredPosts);
        } catch (error) {
            console.log(`An error was returned while trying to delete post ${id}. Details: ${error}`);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="admin">
            <h1>Post's management</h1>

            {
                loading
                    ? <p>Loading...</p>
                    : (
                        posts.map((post) => (
                            <div className="post" key={post.id}>
                                <h2>{post.title}</h2>

                                <div className="actions">
                                    <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>Edit</Link>
                                    <button className="btn delete-btn" onClick={() => deletePost(post.id)}>Delete</button>
                                </div>
                                {/* <p>{post.body}</p>
                                <Link to={`/posts/${post.id}`} className='btn'>Read more</Link> */}
                            </div>
                        ))
                    )
            }
        </div>
    );
}

export default Admin