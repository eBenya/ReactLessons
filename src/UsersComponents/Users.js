import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import User from './User';

function id() {
    return nanoid();
}

const initUsers = [
    { id: id(), name: 'user1', surname: 'surn1', age: 30, isBanned: false, isEdit: false },
    { id: id(), name: 'user2', surname: 'surn2', age: 31, isBanned: false, isEdit: false },
    { id: id(), name: 'user3', surname: 'surn3', age: 32, isBanned: false, isEdit: false },
];

function Users() {
    const [users, setUsers] = useState(initUsers);
    const renderUsers = users.map(user => <User
        key={user.id}
        obj={user}        
        banFunc={banUser}
        editToogleFunc={editUserToogleMode}
        editDataFunc={editUser}
    />
    );
    function editUser(id, propName, newValue){
        setUsers(users.map(user=>{
            if(user.id === id){
                user[propName] = newValue;
            }
            return user;
        }));
    }

    function editUserToogleMode(id) {
        setUsers(users.map(user => {
            if (user.id === id) {
                user.isEdit = !user.isEdit;
            }
            return user;
        }));
    }

    function banUser(id, isBan) {
        setUsers(users.map(user => {
            if (user.id === id) {
                user.isBanned = isBan;
            }
            return user;
        }))
    }
    return (
        <div>
            {renderUsers}
        </div>
    );
}

export default Users;