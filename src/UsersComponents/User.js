import React from "react";

function User({ name, surname, age, id, isBanned, banFunc, isEdit, editToogleFunc, editDataFunc }) {
    return (
        <p>
            <strong>id:</strong> {id}<br />
            {
                isEdit
                    ?
                    <input value={name} onChange={e=>editDataFunc(id, 'name', e.target.value)} onBlur={()=>editToogleFunc(id)}/>
                    :
                    <span onClick={()=>editToogleFunc(id)}> {name} </span>
            }
            {
                isEdit
                    ?
                    <input value={surname} onChange={e=>editDataFunc(id, 'surname', e.target.value)} onBlur={()=>editToogleFunc(id)}/>
                    :
                    <span onClick={()=>editToogleFunc(id)}> {surname} </span>
            }
            {
                isEdit
                    ?
                    <input value={age} onChange={e=>editDataFunc(id, 'age', e.target.value)} onBlur={()=>editToogleFunc(id)}/>
                    :
                    <span onClick={()=>editToogleFunc(id)}> - {age} years</span>
            }
            {isBanned ? <font color="red">Banned</font> : ''};
            <button onClick={() => banFunc(id, !isBanned)}>
                {isBanned ? 'UnBan' : 'Ban!!!'}
                <img width="25" height="15" src="https://v6q9s5t8.ssl.hwcdn.net/wp-content/uploads/2021/01/banhammer-scaled.jpg"></img>
            </button>
        </p>
    );
}

export default User;