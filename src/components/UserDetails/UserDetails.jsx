import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const { website, name } = user;
    const {userId} = useParams();
    console.log(userId)


    return (
        <div>
            <h3>User details here</h3>
            <h3>Name: {name}</h3>
            <p>wbsite: {website}</p>
        </div>
    );
};

export default UserDetails;