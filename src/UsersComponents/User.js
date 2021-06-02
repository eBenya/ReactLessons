import React from 'react';
import UserField from './UserField';

function User({ obj, banFunc, editDataFunc }) {
    const objKeys = Object.keys(obj);
    return (
        <p>
            <strong>id:</strong> {obj.id}<br />

            <UserField
                id={obj.id}
                textContent={obj.name}
                type={objKeys[1]}
                editDataFunc={editDataFunc}
            />
            <UserField
                id={obj.id}
                textContent={obj.surname}
                type={objKeys[2]}
                editDataFunc={editDataFunc}
            />
            <UserField
                id={obj.id}
                textContent={obj.age}
                type={objKeys[3]}
                editDataFunc={editDataFunc}
            />

            {obj.isBanned ? <font color="red">Banned</font> : ''};
            <button onClick={() => banFunc(obj.id, !obj.isBanned)}>
                {obj.isBanned ? 'UnBan' : 'Ban!!!'}
                <img width="25" height="15" src="https://v6q9s5t8.ssl.hwcdn.net/wp-content/uploads/2021/01/banhammer-scaled.jpg"></img>
            </button>
        </p>
    );
}

export default User;