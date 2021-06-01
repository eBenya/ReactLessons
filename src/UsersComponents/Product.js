import React from 'react';

function Product({ id, name, cost, isEdit, toggleMode, editProd }) {
    return <div>
        name: {
			isEdit
			? <input value={name} onChange={event => editProd(id, 'name', event.target.value)} /> 
			: <span>{ name }</span>
		}
		cost: {
			isEdit
			? <input value={cost} onChange={event => editProd(id, 'cost', event.target.value)} /> 
			: <span>{ cost }</span>
		}

        <button onClick={() => toggleMode(id)}>{isEdit ? 'Save' : 'Edit'}</button>
    </div>;
}

export default Product;