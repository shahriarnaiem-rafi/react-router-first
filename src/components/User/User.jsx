import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,email,phone}=user;
    const userStyle={
        border:'2px solid yellow',
        borderRadius:'20px',
        padding:'10px',
        margin:'20px'

    }
    return (
        <div style={userStyle}>
            <h4>{name}</h4>
            <h4>Email:- {email}</h4>
            <h4>Phone:- <small>{phone}</small></h4>
            <Link to={`/users/${id}`}>show details</Link>
        </div>
    );
};

export default User;