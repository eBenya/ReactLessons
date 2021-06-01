import React from "react";

function User({ name, surname, age }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{age}</td>
        </tr>
    );
}

export default User;