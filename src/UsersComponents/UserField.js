import React, { useState } from 'react';

function UserField({id, textContent, type, editDataFunc}) {
    const [isEdit, setIsEdit] = useState(false);
    return isEdit
        ?
        <input value={textContent} onChange={e => editDataFunc(id, type, e.target.value)} onBlur={() => setIsEdit(false)} />
        :
        <span onClick={() => setIsEdit(true)}> {textContent} </span>
}

export default UserField;