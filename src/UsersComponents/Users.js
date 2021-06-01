import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import User from './User';

function id() {
    return nanoid();
}

const initUsers = [
    { id: id(), name: 'user1', surname: 'surn1', age: 30 },
    { id: id(), name: 'user2', surname: 'surn2', age: 31 },
    { id: id(), name: 'user3', surname: 'surn3', age: 32 },
];

function Users() {
    const [users, setUsers] = useState(initUsers);
    const renderUsers = users.map(val => <User
        key={val.id}
        name={val.name}
        surname={val.surname}
        age={val.age}
        id={val.id}
    />
    );
    return (
        <div>
            {renderUsers}
        </div>
    );
}

export default Users;