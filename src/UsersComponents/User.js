import React from "react";

function User({ name, surname, age, id }) {
    return (
        <p>
            <strong>id:</strong> {id}<br />
            {surname} {name} - {age} years;
        </p>
    );
}

export default User;