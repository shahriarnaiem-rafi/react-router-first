import React, { use } from 'react';

const Userdetails2 = ({ userPromise }) => {
    const { name, username } = use(userPromise);

    return (
        <div>
            <p><small> username : {username}</small></p>
            <p> name: {name}</p>
        </div>
    );
};

export default Userdetails2;