import React, { use } from 'react';

const Users2 = ({usersPromis}) => {
    const users=use(usersPromis);
    console.log("users to sunpense data load  ",users)
    return (
        <div>
           <h2>This is user 2</h2>
        </div>
    );
};

export default Users2;