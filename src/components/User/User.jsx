import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const { id,name, email, phone } = user;
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

        </div>
    );
};

export default User;