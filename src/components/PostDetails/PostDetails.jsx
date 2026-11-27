import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post=useLoaderData();
    const navigate =useNavigate();
    
    return (
        <div>
            <h2>{post.id}</h2>
            <p>{post.title}</p>
            <button onClick={()=> navigate(-1)}>go back</button>
        </div>
    );
};

export default PostDetails;