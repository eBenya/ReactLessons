import React, { useState } from 'react';

function ProductField({ id, text, type, editProd }) {
	const [isEdit, setIsEdit] = useState(false);

	return <td>
		{
			isEdit
				?
				<input value={text} onChange={event => editProd(id, type, event.target.value)} onBlur={()=>setIsEdit(false)}/>
				:
				<span onClick={()=>setIsEdit(true)}>{text}</span>
		}
	</td>
}

export default ProductField;