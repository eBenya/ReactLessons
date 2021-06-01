import React from "react";

function User({ name, surname, age, id, isBanned, banFunc }) {
    return (
        <p>
            <strong>id:</strong> {id}<br />
            {surname} {name} - {age} years{isBanned ? <span>. Banned</span> : ''};
            <button onClick={()=>banFunc(id, !isBanned)}>
                {isBanned?'AnBan':'Ban!!!'}
                <img width="25" height="15" src="https://v6q9s5t8.ssl.hwcdn.net/wp-content/uploads/2021/01/banhammer-scaled.jpg"></img>
            </button>
        </p>
    );
}

export default User;