import React from 'react';

function UserField({id, textContent, type, isEdit, editToogleFunc, editDataFunc}) {
    return isEdit
        ?
        <input value={textContent} onChange={e => editDataFunc(id, type, e.target.value)} onBlur={() => editToogleFunc(id)} />
        :
        <span onClick={() => editToogleFunc(id)}> {textContent} </span>
}

export default UserField;