import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import Userdetails2 from '../userDetails2/Userdetails2';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);
    const { id, name, email, phone } = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());
    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '20px',
        margin: '10px'

    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>

            <Link to={`/users/${id}`}>view details</Link>
            <button onClick={() => setShowInfo(!showInfo)} >{showInfo ? 'Hide' : 'show'} info</button>
            {
                showInfo && <Suspense fallback={<span> loading......</span>}>
                    <Userdetails2 userPromise={userPromise}></Userdetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;