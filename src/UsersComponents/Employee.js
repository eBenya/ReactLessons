import React from 'react';

function Employee({name, surName, patronymic, salary }){
    return <p>
        <span>name: {name}, </span>
        <span>surname: {surName}, </span>
        <span>patronymic: {patronymic}, </span>
        <span>salary: {salary}; </span>
    </p>;
}

export default Employee;