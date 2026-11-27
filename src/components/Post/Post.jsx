import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    };
    return (
        <div style={{ border: '2px solid black' }}>
            id: {id} <br />
            hello this is title : {title}

            <Link to={`/posts/${id}`}>
                <button>VIew details</button>
            </Link>
            <button onClick={ handleNavigate}>details of : {id}</button>
        </div>
    );
};

export default Post;