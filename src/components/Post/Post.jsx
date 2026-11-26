import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div style={{ border: '2px solid black' }}>
            id: {id} <br />
            hello this is title : {title}

            <Link to={`/posts/${id}`}>
                <button>VIew details</button>
            </Link>
        </div>
    );
};

export default Post;