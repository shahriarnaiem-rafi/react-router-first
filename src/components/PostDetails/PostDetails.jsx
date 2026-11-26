import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post=useLoaderData();
    return (
        <div>
            <h2>{post.id}</h2>
            <p>{post.title}</p>
        </div>
    );
};

export default PostDetails;