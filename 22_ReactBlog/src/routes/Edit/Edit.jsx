import "./Edit.css";

import blogFetch from "../../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [ post, setPost ] = useState({});

    const getPost = async() => {
        try {
            const response = await blogFetch.get(`/posts/${id}`);

            setPost(response.data);
            setTitle(response.data.title);
            setBody(response.data.body);
        } catch (error) {
            console.log(`Error trying to get the post. Details: ${error}`);
        }
    };

    useEffect(() => { getPost()}, []);

    const editPost = async(e) => {
        e.preventDefault();

        const post = { title, body, userId: 1 };
        await blogFetch.put(`/posts/${id}`, { body: post });

        navigate("/admin");
    };

    return (
        <div>
            <h2>Editing post {title}</h2>

            <form onSubmit={(e) => editPost(e)}>
            <div className="form-control">
                <label htmlFor="title">Title:</label>
                <input
                type="text"
                name="title"
                id="title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What's the post title?"
                />
            </div>

            <div className="form-control">
                <label htmlFor="body">Content:</label>
                <textarea
                name="body"
                id="body"
                value={body || ""}
                onChange={(e) => setBody(e.target.value)}
                placeholder="What's the post body?"
                >
                </textarea>
            </div>

            <input type="submit" value="Edit post" className="btn" />
            </form>
        </div>
    )
}

export default Edit